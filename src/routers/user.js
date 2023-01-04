const express = require('express');
const router = new express.Router();
const UserModel = require('../models/user');

router.post('/user', async (req, res) => {
    try {
        const list = await UserModel.create(req.body);
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/user/login', async (req, res) => {
    try {
        const user = await UserModel.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(201).send({token, user});   
    } catch (err) {
        res.status(403).send(err);
    }
});

router.post('/user/logout', async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();
        res.status(200).send();
    } catch (err) {
        res.status(403).send(err);
    }
});

router.get('/user', async (req, res) => {
    try {
        const list = await UserModel.find({});
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.get('/user/:id', async (req, res) => {
    try {
        const list = await UserModel.findById(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(404).send(err);
    }
});

router.patch('/user/:id', async (req, res) => {
    try {
        const list = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const list = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        const list = await UserModel.findByIdAndRemove(req.params.id);
        res.status(200).json(list);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;