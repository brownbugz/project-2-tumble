var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');

require('dotenv').config();

require('./config/database');

require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersHomePageRouter = require('./routes/users-homepage');
var newEntryRouter = require('./routes/new-entry');
var pastEntryRouter = require('./routes/past-entry');
var reviewsRouter = require('./routes/reviews');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({
  secret: 'toDateOrNotToDate',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users-homepage', usersHomePageRouter);
app.use('/new-entry', newEntryRouter);
app.use('/past-entry', pastEntryRouter);
app.use('/reviews', reviewsRouter);



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
