var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

console.log('Demo websocket endpoint ! ')

app.ws('/', function(ws,req){
	console.log("Incoming Client Request Received !")
	ws.on('message', function(msg){
		console.log("Client Message : " + msg)
		console.log("Server echoing client message ! ")
		ws.send(msg);
	})
});


var port = process.env.PORT || 8000;
app.listen(port);

console.log('\n\n Server started at port : ' + port + ' !!')