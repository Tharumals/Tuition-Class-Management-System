const mongoose = require('mongoose');
const config = require('../config/database');


const DocumentSchema = mongoose.Schema({
    filename: {
        type: String,
        require: true
    },
    
});

const Document = module.exports = mongoose.model('Document', DocumentSchema);



module.exports.getDocumentByTitle = function (filename, callback) {
    const query = {
        filename: filename
    }
   Document.findOne(query, callback);
}
