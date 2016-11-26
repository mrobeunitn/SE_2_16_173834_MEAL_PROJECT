 
var express = require('express');
//inspect
var util = require('util');
var bind = require('bind');
var path  = require('path');
var postgresdb = require('pg');
//instantiate express
var app = express();
//POST
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) 
{
    bind.toFile('index.tpl', 
	{
        
    }, 
    function(data) 
    {
        //write response
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


