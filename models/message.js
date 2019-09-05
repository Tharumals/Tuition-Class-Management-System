const mongoose = require('mongoose');
const config = require('../config/database');
const Student=require('./student');

const MessageSchema = mongoose.Schema({
   firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    registerNumber: {
         type: String,
         require: true
     },
    grade:{
        type:String,
        require:true
    },

    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Message = module.exports = mongoose.model('Message', MessageSchema);

module.exports.getMessageById = function (id, callback) {
    Message.findById(id, callback);
}

