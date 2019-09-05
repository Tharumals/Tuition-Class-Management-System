const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


const User2Schema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User2 = module.exports = mongoose.model('User2', User2Schema);

module.exports.getUser2ById = function (id, callback) {
    User2.findById(id, callback);
}

module.exports.getUser2ByUsername = function (username, callback) {
    const query = {
        username: username
    }
    User2.findOne(query, callback);
}

module.exports.addUser2 = function (newUser2, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser2.password, salt, (err, hash) => {
            if (err) throw err;
            newUser2.password = hash;
            newUser2.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}
