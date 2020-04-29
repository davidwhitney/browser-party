import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";
import { Controls } from "./Controls";
import { render } from "./render";
import { Entity } from "../types";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


const fps = 30;
const usernameBox = document.getElementById("username") as HTMLInputElement;
const connectButton = document.getElementById("connect") as HTMLButtonElement;
usernameBox.value = uuidv4();

let worldContents: Entity[] = [];
let connection: LocationServerConnection;
let me: Attendee;

function join() {
  worldContents = [];
  connection = new LocationServerConnection("wss://" + window.location.host);
  connection.onMessageReceived((message) => {
    console.log("Got a message.");
    const knownEntity = worldContents.filter(item => item.id == message.sender.id).length > 0;
    if (!knownEntity) {
      worldContents.push(message.sender);  
    }
    const worldEntity = worldContents.filter(item => item.id == message.sender.id)[0];
    worldEntity.x = message.sender.x;
    worldEntity.y = message.sender.y;
    
  });

  const me = new Attendee(usernameBox.value, "room1", 50, 50);
  me.onMovement((entity, move) => connection.sendMovement(entity, move));
  worldContents.push(me);

  new Controls(me).connect();
}

connectButton.addEventListener("click", () => { join(); });
setInterval(() => render(worldContents), (1000 / fps));