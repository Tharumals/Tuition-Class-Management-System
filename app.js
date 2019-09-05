const express = require('express');
const path = require('path');
const multer= require('multer')
const bodyParser = require('body-parser');
const cors = require('cors');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,  Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});
app.set('views', path.resolve(__dirname, './routes/uploads'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.resolve(__dirname, './routes/uploads')));


const users = require('./routes/users');
const users2 = require('./routes/users2');
const messages = require('./routes/messages');
const students = require('./routes/students');
const eventRegisters = require('./routes/eventRegisters');
const payments = require('./routes/payments');
const teachers = require('./routes/teachers');
const teacherToStudents = require('./routes/teacherToStudents');
const requests = require('./routes/requests');
const events = require('./routes/events');
const responses = require('./routes/responses');
const documents = require('./routes/documents');
const userLogs = require('./routes/userLogs');

const port = process.env.PORT || 8000;



app.use(cors());



app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './routes/uploads')));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(fileUpload());

var files = require('./routes/files');
app.use('/files', files);
/*app.get('/*', (req, res) => {
  console.log('lallaa');
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});*/

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/users2', users2);
app.use('/messages', messages);
app.use('/students',students);
app.use('/payments', payments);
app.use('/eventRegisters', eventRegisters);
app.use('/teachers', teachers);
app.use('/teacherToStudents', teacherToStudents);
app.use('/requests',requests);
app.use('/events', events);
app.use('/responses', responses);
app.use('/documents', documents);
app.use('/userLogs', userLogs);

app.get('/documents', function (req, res) {
  res.end('file catcher example');
});


app.listen(port, () => {
  console.log('Server started on port '+port);
});
