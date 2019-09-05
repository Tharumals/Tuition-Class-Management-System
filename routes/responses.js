const express = require('express');
const router = express.Router();
const Response = require('../models/response');

/* GET ALL  */
router.get('/response', function (req, res, next) {
    Response.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE  BY ID */
router.get('/response/:id', function (req, res, next) {
    Response.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE  */
router.post('/response', function (req, res, next) {
    Response.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE  */
router.put('/response/:id', function (req, res, next) {
    Response.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE  */
router.delete('/response/:id', function (req, res, next) {
    Response.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
