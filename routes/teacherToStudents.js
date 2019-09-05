const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const TeacherToStudent = require('../models/teacherToStudent');

/* GET ALL  */
router.get('/teacherToStudent', function (req, res, next) {
    TeacherToStudent.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE  BY ID */
router.get('/teacherToStudent/:id', function (req, res, next) {
   TeacherToStudent.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE STUDENT */
router.post('/teacherToStudent', function (req, res, next) {
    TeacherToStudent.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* DELETE  */
router.delete('/teacherToStudent/:id', function (req, res, next) {
    TeacherToStudent.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
