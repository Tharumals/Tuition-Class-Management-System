const mongoose = require('mongoose');
const config = require('../config/database');


const ClassSchema = mongoose.Schema({
    classId: {
        type: String,
        require: true,
        uniqu: true
    },
    
    subject: {
        type: String,
        enum: ['maths', 'science', 'english', 'history', 'lit', 'ICT']
    },

    grade: {
        type: Number,
        require: true
    },

    time: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },

    venue: {
        type: String,
        require: true
    },
   

  

});

const Class = module.exports = mongoose.model('Class', ClassSchema);
