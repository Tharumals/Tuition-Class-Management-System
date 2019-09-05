const express = require('express');
const router = express.Router();
const multer = require('multer');
const DIR = './upload';

const Document = require('../models/document');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
         //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }

});

let upload = multer({
    storage: storage,
});

let name;

router.post('/upload', upload.single('photo'), function (req, res) {
    this.name = req.file.filename;
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        // console.log("jdgas",req.file);
        // res.render('image',{
        //   path:req.file.path
        // });
        return res.send({
            success: true
        })
    }
});



router.get('/all', function (req, res, next) {
    Document.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/document/:name', (req, res, next) => {
    console.log('res', req.query.title);
    Document.getDocumentByTitle(req.query.title, (err, doc) => {
        if (err) throw err;
        else {
            res.send(doc);
        }
        // console.log("doc",doc);
    })
})

router.post('/download', function (req, res, next) {
    filepath = path.join(__dirname, './upload')  + req.body.filename;
    res.sendFile(filepath);
});


module.exports = router;