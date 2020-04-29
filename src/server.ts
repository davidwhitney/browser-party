import { Message, MessageBody, Join, Movement } from "./browserparty/messages";

const express = require("express");
const path = require("path");
import * as WebSocket from 'ws';
import * as http from 'http';

const app = express();

app.use(express.static(path.join(__dirname, "/dist"))); // TypeScript output compiled to here.
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (request, response)  => {
  response.sendFile(__dirname + "/views/index.html");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const rooms = {
  "room1": []
};

function join()msg: Message<Join> {
  console.log("join msg");  
}

function movement(msg: Message<Movement>) {
  console.log("movement msg");

}

const messageHandlers = {
  "join": join
  "movement": movement
};

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {        
        const msg = JSON.parse(message) as any;
        messageHandlers[msg.body.type](msg);
        
        wss.clients.forEach(client => {
          
          if (client == ws) {
             // console.log("this is the sender!");
          } else {
            client.send(message);
          }
          
        });
      
    });
});

const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on " + process.env.PORT);
});