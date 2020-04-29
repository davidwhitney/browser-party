import { Attendee } from "../browserparty/Attendee";
import { RoomState } from "../browserparty/messages";
import { LocationServerConnection } from "./LocationServerConnection";
import { Controls } from "./Controls";
import { render } from "./render";
import { Entity, IDrawable } from "../types";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

let worldContents: IDrawable[] = [];
let me: Attendee;

const fps = 30;
const usernameBox = document.getElementById("username") as HTMLInputElement;
const connectButton = document.getElementById("connect") as HTMLButtonElement;
usernameBox.value = uuidv4();

const connection = new LocationServerConnection("wss://" + window.location.host); 
connection.onMessageReceived((message: RoomState) => {
  
  for (let serverEntity of message.contents) {
    
      if (me && serverEntity.id == me.id) continue;
    
      const clientEntityExists = worldContents.filter(item => item.id == serverEntity.id).length > 0;
      if (!clientEntityExists) {
        worldContents.push(serverEntity);  
      }
      const clientEntity = worldContents.filter(item => item.id == serverEntity.id)[0];
      clientEntity.x = serverEntity.x;
      clientEntity.y = serverEntity.y;
  }  
   
});


function join() {
  worldContents = [];

  const me = new Attendee(usernameBox.value, "room1", 50, 50);
  me.onMovement((entity, move) => connection.sendMovement(entity, move));
  
  connection.join(me);
  worldContents.push(me);
  new Controls(me).connect();
}

connectButton.addEventListener("click", () => { join(); });
setInterval(() => render(worldContents), (1000 / fps));