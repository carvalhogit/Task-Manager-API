const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: mongoose.Schema.Types.ObjectId,
});

const ListModel = mongoose.model('List', listSchema);

module.exports = ListModel;