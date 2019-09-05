const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

/*
router.post('/register', (req, res, next) => {
    let newStudent = new Student({
        studentId: req.body.studentId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    Student.addStudent(newStudent, (err, student) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register Student'
            });
        } else {
            res.json({
                success: true,
                msg: 'Student registered'
            });
        }
    });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
    const studentId = req.body.studentId;
    const password = req.body.password;

    Student.getStudentByStudentId(studentId, (err, student) => {
        if (err) throw err;
        if (!student) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }

        Student.comparePassword(password, student.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(student, config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    student: {
                        id: student._id,
                        name: student.name,
                        studentId: student.studentId
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong password'
                });
            }
        });
    });
});


router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res, next) => {
    res.json({
        student: req.student
    });
});
*/

/* GET ALL STUDENT */
router.get('/student', function (req, res, next) {
    Student.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE STUDENT BY ID */
router.get('/student/:id', function (req, res, next) {
    Student.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.post('/student', function (req, res, next) {
    Student.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE STUDENT */
router.put('/student/:id', function (req, res, next) {
    Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE STUDENT */
router.delete('/student/:id', function (req, res, next) {
    Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
