import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";

const world = document.getElementById("world") as HTMLInputElement;
const me = new Attendee("username", 50, 50);

const connection = new LocationServerConnection("wss://" + window.location.host);



export class Controls {
  
  public processInput(keyPressed: any) {
    const key = keyPressed.key.toLowerCase();
    const movement = toMove(key);
    this.game.world.move(movement);
  }
  
  public connect() {
    window.addEventListener("keypress", (args) => {
      this.processInput(args);
    }, false);    
  }
}

const toMove = (key: string): Move => {
  switch(key) {
    case "w": return { deltaX: 0, deltaY: -1 };
    case "a": return { deltaX: -1, deltaY: 0 };
    case "s": return { deltaX: 0, deltaY: 1 };
    case "d": return { deltaX: 1, deltaY: 0 };
    default:  return { deltaX: 0, deltaY: 0 };
  }    
}