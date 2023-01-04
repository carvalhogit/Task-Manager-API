const mongoose = require('mongoose');
const {resolve} = require('path');

require('dotenv').config({ path: resolve(__dirname, `../../.env`)});

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@taskmanager.yc2ukbc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
        if (err) return console.log(err);
        return console.log('Connected to database');
    });
};

module.exports = connectToDatabase;