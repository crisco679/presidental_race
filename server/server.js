var express = require('express');
var path = require('path');
var app = express();

var democrats = ["Bernie Sanders","Hillary Clinton"];
var republicans = ["Donald Trump","Ted Cruz"];



app.use(express.static('server/public'));

app.get('/', function(request, response){
 response.sendFile(__dirname + '/public/index.html');

});
app.get('/democrats', function(request,response){
  response.send(democrats);
});
app.get('/republicans', function(request,response){
  response.send(republicans);
});




//server
var server = app.listen(3000, function(){
  var port = server.address().port
  console.log('Listening on port', port);
});
