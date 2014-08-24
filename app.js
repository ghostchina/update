var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer           = require('multer');
var env              = process.env.NODE_ENV || 'development';

var routes = require('./routes/index');
var bookshelf = require('./db').bookshelf;
var app = express();

app.set('bookshelf',bookshelf);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.enable('trust proxy');

app.disable('x-powered-by');


app.use(favicon());

if (env === 'development') {
app.use(logger('dev'))
} else {
app.use(logger())
};

app.use(function(req, res, next) {
  var contentType = req.headers['content-type'] || ''
    , mime = contentType.split(';')[0];

  if (mime != '') {
    return next();
  }

  var data = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    req.rawBody = data;
    next();
  });
});

app.use(multer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
