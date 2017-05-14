var express = require('express');
var mysqlConnect = require('./MySqlConnect.js');
var app = express();
var express = require('express');


app.get('/listTrades', function (req, res) {
   console.log('Result from WS: ');
   
   var response = mysqlConnect.listTradesFromDB(function(response){
	   console.log('listTrades:'+response);
	   res.send('listTrades:'+response);
   });
   
})


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   
   res.send('Hello GET: ');
})

// This responds a POST request for the homepage
app.get('/addUser', function (req, res) {
   console.log("Got a POST request for the homepage");
   var response = mysqlConnect.addTags(function(response){
	   console.log('Added:'+response);
	   res.send('Added:'+response);
   });
})

// This responds a DELETE request for the /del_user page.
app.put('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/get', function(req, res) {   
   console.log("Got a GET request for /get");
   var json = res();
   res.send('Page Pattern Match: '+json);
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})