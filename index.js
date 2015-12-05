var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});