const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const UserLog = require('../models/userLog');

router.post('/userLog', function (req, res, next) {
    UserLog.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.route('/userLog').get((req, res) => {
    UserLog.find((err, payment) => {
        if (err)
            console.log(err);
        else
            res.json(payment);
    });
});

/* GET SINGLE  BY ID */
router.get('/userLog/:id', function (req, res, next) {
    UserLog.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});





router.route('/userLog/delete/:id').get(function (req, res) {
    UserLog.findByIdAndRemove({
        _id: req.params.id
    }, function (err, adUnit) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = router;
