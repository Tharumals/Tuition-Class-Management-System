const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const UserLogSchema = mongoose.Schema({
  
    role: {
        type: String,
        require: true
    },

    registerNumber: {
        type: String,
        required: true
    },
    
});

const UserLog = module.exports = mongoose.model('UserLog', UserLogSchema);
