const mongoose = require('mongoose');
const config = require('../config/database');


const TeacherSchema = mongoose.Schema({
    teacherId: {
        type:String,
        require:true,
        uniqu:true
    },
    date: {
        type: Date
    },

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    address: {
         type: String,
         require: true
     },
    phoneNumber: {
         type: String,
     },
    email: {
          type: String,
    },

    nic: {
         type: String,
     },

    grade: [{
         type: Number,
         require: true
     }],

     subject: {
         type: String,
         enum: ['maths', 'science', 'english','history','lit','ICT' ]
     }

});

const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema);

module.exports.getUserById = function (id, callback) {
    Teacher.findById(id, callback);
}