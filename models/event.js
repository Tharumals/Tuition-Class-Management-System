const mongoose = require('mongoose');
const config = require('../config/database');


const EventSchema = mongoose.Schema({
    eventId: {
        type: String,
        require: true,
    },

    eventName: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },

     grade: {
        type:Number,
        require: true
    },

    teacher: {
        type: String,
        require:true
    },

    date: {
        type: Date,
        require:true
    },

    time: {
          type:String,
          require: true
      },

    venue: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

});

const Event = module.exports = mongoose.model('Event', EventSchema);
