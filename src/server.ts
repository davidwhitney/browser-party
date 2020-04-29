import { Message, MessageBody, Join, Movement, RoomState } from "./browserparty/messages";
import { Attendee } from "./browserparty/Attendee";
import { Entity } from "./types";

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

const contents: Entity[] = [];
const rooms = { "room1": contents };

function join(sender: any, msg: Message<Join>) {
  console.log(msg);
  rooms["room1"].push(msg.sender);
}

function movement(sender: any, msg: Message<Movement>) {  
  console.log(msg);
  const room = rooms[msg.sender.roomId];
  const serverEntity = room.filter(e => e.id === msg.sender.id)[0] as Attendee;
  serverEntity.x += msg.body.move.deltaX;
  serverEntity.y += msg.body.move.deltaY;
}

function heartbeat() {  
  const room = rooms["room1"];
  const stateMessage = new RoomState(room);
  const asString = JSON.stringify(stateMessage);
  wss.clients.forEach(client => {
    client.send(asString);
  });
}

const messageHandlers = {
  "join": join,
  "movement": movement
};

let heartbeatTimer: any;
wss.on('connection', (ws: WebSocket) => {  
    heartbeatTimer = setInterval(heartbeat, 1000);

    ws.on('message', (message: string) => {   
      const msg = JSON.parse(message) as any;
      messageHandlers[msg.body.type](ws, msg);
    });
});

const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on " + process.env.PORT);
});