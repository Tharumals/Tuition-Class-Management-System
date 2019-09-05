const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Message = require('../models/message');


router.post('/message', function(req, res) {
   
     let message = new Message(req.body);
     message.save()
         .then(message => {
             res.status(200).json({
                 'message': 'Added successfully'
             });
         })
         .catch(err => {
             res.status(400).send('Failed to create new record');
         });
});


router.route('/message').get((req, res) => {
    Message.find((err, message) => {
        if (err)
            console.log(err);
        else
            res.json(message);
    });
});

router.get('/message/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/*
router.route('/message/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});
*/

router.route('/message/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({
        _id: req.params.id
    }, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});



module.exports = router;
