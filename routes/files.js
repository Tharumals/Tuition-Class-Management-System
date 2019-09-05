var express = require('express');
var mongojs = require('mongojs');
var fs = require('fs');
var path = require('path');

var router = express.Router();
var db = mongojs('mongodb://localhost:27017/Tutiondb', ['files']);

var DIR = path.resolve(__dirname, 'uploads/');

router.post('/', (req, res) => {
    console.log(req.files);
    if (req.files) {
        let file = req.files.uploads,
            filename = file.name;
        file.mv(path.resolve(DIR, filename), (err) => {
            if (err) {
                console.log(err);
            } else
                console.log('Done');
        });
        db.files.save({
            'filename': filename
        }, (err, file) => {
            if (err) return res.status(403).json({
                'result': 'error',
                'message': 'something is wrong'
            });

            console.log('file added to database');
            res.json({
                'file': file
            });
        })
    }
});

router.get('/', (req, res) => {
    db.files.find({}, (err, files) => {
        if (err)
            return res.status(403).json({
                'result': 'error',
                'message': 'something is wrong'
            });
        return res.send({
            'message': 'success',
            'files': files
        });
    })
});

router.get('/:filename', (req, res) => {
    console.log(req.params);
    db.files.find({}, (err, files) => {
        if (err)
            return res.status(403).json({
                'result': 'error',
                'message': 'something is wrong'
            });
        var filePath = path.resolve(DIR,req.params.filename);

        res.download(filePath, req.params.filename);
    });
});


router.delete('/:filename', (req, res) => {
    db.files.remove({
        $and: [{
            filename: req.params.filename
        }]
    }, (err, file) => {
        if (err)
            return res.status(404).json({
                'result': 'error',
                'message': 'something is wrong'
            });
        fs.unlink(path.resolve(DIR, req.params.filename), (err) => {
            console.log(err);
        });
        return res.send(file);

    })
});


module.exports = router;