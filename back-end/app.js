const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tests = require('./routes/test'); //add
const selectRouter = require('./routes/select');

const app = express();

// mongoose.connect('mongodb://localhost:270217/trabee-web');
// mongoose.connect('mongodb://localhost:27918/trabee-web');
mongoose.connect('mongodb+srv://user:2017@cluster0-hqi94.mongodb.net/trabee-web?retryWrites=true&w=majority');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/tests', tests); //add
app.use('/api/select', selectRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
