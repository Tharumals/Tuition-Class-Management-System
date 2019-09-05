const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User2 = require('../models/user2');


router.post('/register', (req, res, next) => {
    let newUser2 = new User2({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    });

    User2.addUser2(newUser2, (err, user2) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user'
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User2.getUser2ByUsername(username, (err, user2) => {
        if (err) throw err;
        if (!user2) {
            return res.json({
                success: false,
                msg: 'User not found'
            });
        }

        User2.comparePassword(password, user2.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user2, config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user2: {
                        id: user2._id,
                        name: user2.name,
                        username: user2.username
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
        user: req.user2
    });
});

module.exports = router;
