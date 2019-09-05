const mongoose = require('mongoose');
const config = require('../config/database');


const PaymentSchema = mongoose.Schema({
    paymentId: {
        type: String,
        require: true
    },

    studentId: {
          type: String,
          require: true
      },

    grade: {
        type: String,
        require: true
    },

    subject: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    amount: {
        type: Number,
        require: true
    },

    month: {
        type:String,
        require: true
    },
    details: {
        type: String,
        require: true
    },





});

const Payment = module.exports = mongoose.model('Payment', PaymentSchema);
