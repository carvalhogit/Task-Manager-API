const express = require('express');
const router = new express.Router();
const ListModel = require('../models/list');

router.post('/list', async (req, res) => {
    try {
        const list = await ListModel.create(req.body);
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/list', async (req, res) => {
    try {
        const list = await ListModel.find({});
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get('/list/:id', async (req, res) => {
    try {
        const list = await ListModel.findById(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.patch('/list/:id', async (req, res) => {
    try {
        const list = await ListModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put('/list/:id', async (req, res) => {
    try {
        const list = await ListModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/list/:id', async (req, res) => {
    try {
        const list = await ListModel.findByIdAndRemove(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;