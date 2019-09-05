const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Payment = require('../models/payment');

router.post('/payment', function (req, res, next) {
    Payment.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.route('/payment').get((req, res) => {
    Payment.find((err, payment) => {
        if (err)
            console.log(err);
        else
            res.json(payment);
    });
});

/* GET SINGLE  BY ID */
router.get('/payment/:id', function (req, res, next) {
    Payment.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.route('/payment/edit/:id').get((req, res) => {
     let id = req.params.id;
     Payment.findById(id, function (err, payment) {
                 res.json(payment);
    })
});


router.route('/payment/update/:id').post((req, res) => {
    Payment.findById(req.params.id, (err, payment) => {
        if (!payment)
            return next(new Error('Could not load Document'));
        else {
            payment.grade = req.body.grade;
            payment.subject = req.body.subject;
            payment.payment = req.body.payment;
            payment.save().then(payment => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
    
});

router.route('/payment/delete/:id').get(function (req, res) {
    Payment.findByIdAndRemove({
        _id: req.params.id
    }, function (err, adUnit) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = router;
