var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
  	console.log('a user disconnected');
  });
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
  });
});

http.listen(process.env.PORT || 3000, function () {
  console.log('listening on localhost:3000');
});
