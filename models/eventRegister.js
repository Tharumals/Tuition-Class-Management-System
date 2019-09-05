const mongoose = require('mongoose');
const config = require('../config/database');


const EventRegisterSchema = mongoose.Schema({
    registerNumber: {
        type: String,
        require: true     
    },

    lectureIndex:{
        type:String,
        require:true
    },
  
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    telephoneNumber: {
        type: String,
    },
     date: {
         type: Date,
         default: Date.now
     },


});

const EventRegister = module.exports = mongoose.model('EventRegister', EventRegisterSchema);
