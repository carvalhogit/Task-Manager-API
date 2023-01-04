const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

dotenv.config({ path: '../.env' });

const auth = async (req, res, next) => {
    try {
        const token = req.headers['Authorization'];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token});

        if (!user) {
            return res.status(500).send('Error');
        }

        req.token = token;
        req.user = user;
        next();

    } catch (err) {
        res.status(403).send(err);
    }
};

module.exports = auth;