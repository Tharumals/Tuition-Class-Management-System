const mongoose = require('mongoose');
const config = require('../config/database');


const ResponseSchema = mongoose.Schema({

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

const Response = module.exports = mongoose.model('Response', ResponseSchema);
