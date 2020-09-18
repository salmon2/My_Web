var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sequelize = require('./models').sequelize;   // mysql 시퀄라이저 모델
var userManagerRouter = require('./routes/userManager');
var cors = require('cors');
var passport = require('passport')



require('dotenv').config()
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 1



var app = express();
sequelize.sync();    //서버가 실행될때 시퀄라이저의 스키마를 DB에 적용시킨다.



// view engine setup
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

app.use(passport.initialize());
app.use(passport.session());
const passportConfig = require('./passport')
passportConfig()


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(function(req, res, next) 
// { 
//   res.header("Access-Control-Allow-Origin", "*"); 
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
//   next(); 
// });
app.use(cors());
app.use('/', indexRouter);
app.use('/api/user', usersRouter);

app.use('/usermanager', userManagerRouter);

app.use(cookieParser(process.env.COOKIE_SECRET));








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})
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
