const express = require('express');
const router = express.Router();
const Request = require('../models/request');

/* GET ALL  */
router.get('/request', function (req, res, next) {
    Request.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE  BY ID */
router.get('/request/:id', function (req, res, next) {
    Request.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE  */
router.post('/request', function (req, res, next) {
    Request.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE  */
router.put('/request/:id', function (req, res, next) {
    Request.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE  */
router.delete('/request/:id', function (req, res, next) {
    Request.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
