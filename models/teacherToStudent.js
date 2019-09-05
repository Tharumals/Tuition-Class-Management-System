const mongoose = require('mongoose');
const config = require('../config/database');

const TeacherToStudentSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    subject: {
         type: String,
         require: true
     },

    grade:{
          type: String,
          require: true
      },

    reason: {
         type: String,
         require: true
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

const TeacherToStudent = module.exports = mongoose.model('TeacherToStudent', TeacherToStudentSchema);

module.exports.getTeacherToStudentById = function (id, callback) {
    TeacherToStudent.findById(id, callback);
}
