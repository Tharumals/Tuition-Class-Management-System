const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const EventRegister = require('../models/eventRegister');

/* GET ALL STUDENT */
router.get('/eventRegister', function (req, res, next) {
    EventRegister.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE STUDENT BY ID */
router.get('/eventRegister/:id', function (req, res, next) {
    EventRegister.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE STUDENT */
router.post('/eventRegister', function (req, res, next) {
    EventRegister.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE STUDENT */
router.put('/eventRegister/:id', function (req, res, next) {
    EventRegister.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE STUDENT */
router.delete('/eventRegister/:id', function (req, res, next) {
    EventRegister.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;
