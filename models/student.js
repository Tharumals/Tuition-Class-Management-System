const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

const StudentSchema = mongoose.Schema({
    studentId:{
        type:String,
        require:true
    },

    date: {
        type: Date,
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

    school: {
         type: String,
     },

    gender:
    {
        type:String,
    },

    grade: {
         type: Number,
         
     },

    subject: [{
         type: String,
         require:true
         
     }]

});

const Student = module.exports = mongoose.model('Student', StudentSchema);
/*module.exports.getStudentById = function (id, callback) {
    Student.findById(id, callback);
}

module.exports.getStudentByStudentId = function (studentId, callback) {
    const query = {
        studentId: studentId
    }
    Student.findOne(query, callback);
}

module.exports.addStudent = function (newStudent, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
            if (err) throw err;
            newStudent.password = hash;
            newStudent.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}
*/