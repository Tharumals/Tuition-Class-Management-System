const express = require('express');
const router = express.Router();
const Event = require('../models/event');

/* GET ALL  */
router.get('/event', function (req, res, next) {
    Event.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE  BY ID */
router.get('/event/:id', function (req, res, next) {
    Event.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE  */
router.post('/event', function (req, res, next) {
    Event.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE  */
router.put('/event/:id', function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE  */
router.delete('/event/:id', function (req, res, next) {
    Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
