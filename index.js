const express = require('express');
const app = express();
const server = require('http').createServer(app);
// import { WebSocketServer } from 'ws';
const WebSocketServer = require('ws')

const wss = new WebSocketServer.Server({ server });


wss.on('connection', function connection(ws) {
    console.log('A new client connected!')
    ws.send('Welcome!')
    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('we received: ' + data)
    });
});

app.get("/", (res,req) => res.send('hello world!'))

server.listen(3000, ()=> console.log('listening on port 3000'));