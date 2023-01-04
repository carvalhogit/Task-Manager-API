const express = require('express');
const router = new express.Router();
const TaskModel = require('../models/task');

router.post('/task', async (req, res) => {
    try {
        const list = await TaskModel.create(req.body);
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/task', async (req, res) => {
    try {
        const list = await TaskModel.find({});
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get('/task/:id', async (req, res) => {
    try {
        const list = await TaskModel.findById(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.patch('/task/:id', async (req, res) => {
    try {
        const list = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put('/task/:id', async (req, res) => {
    try {
        const list = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/task/:id', async (req, res) => {
    try {
        const list = await TaskModel.findByIdAndRemove(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;