const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Teacher = require('../models/teacher');

/* GET ALL Taacher */
router.get('/teacher', function (req, res, next) {
    Teacher.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE Teacher BY ID */
router.get('/teacher/:id', function (req, res, next) {
    Teacher.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Teacher */
router.post('/teacher', function (req, res, next) {
    Teacher.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Teacher */
router.put('/teacher/:id', function (req, res, next) {
    Teacher.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE STUDENT */
router.delete('/teacher/:id', function (req, res, next) {
    Teacher.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
