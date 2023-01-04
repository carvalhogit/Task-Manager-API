const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    checked: {
        type: Boolean,
        required: true,
    },
    list_id: {
        type: String,
        required: true,
    },
    owner: mongoose.Schema.Types.ObjectId,
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;