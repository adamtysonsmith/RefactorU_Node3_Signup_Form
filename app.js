var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/success', indexController.success);
app.post('/formsubmit', indexController.form);

var server = app.listen(6181, function() {
	console.log('Express server listening on port ' + server.address().port);
});
