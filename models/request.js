const mongoose = require('mongoose');
const config = require('../config/database');


const RequestSchema = mongoose.Schema({
    teacherId: {
        type: String,
        require: true,
    },
   
    grade: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },

    reason: {
        type: String,
        require: true
    },

    details: {
         type: String,
         require: true
     },

     date: {
         type: Date,
         default: Date.now
     },
   
  


});

const Request = module.exports = mongoose.model('Request', RequestSchema);
