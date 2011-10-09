var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var app = module.exports = express.createServer();

app.configure(function() {
    app.set('views', __dirname);
    app.set('views engine', 'jade');
    return app.use(express.static(__dirname));
  });

app.get('/', function(req, res) {
    return res.render('index.jade');
});

app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true)
      .user(nib());
  }
}));
app.listen(1337);
console.log("Demo");