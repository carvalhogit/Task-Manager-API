const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {resolve} = require('path');

require('dotenv').config({ path: resolve(__dirname, `../../.env`)});

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});


userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
    
    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if(!user) {
        return('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if(!isMatch) {
        return('Unable to login');
    }

    return user;
}

userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
})
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;