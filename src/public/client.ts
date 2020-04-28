import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";
import { Controls } from "./Controls";
import { Entity } from "../types";

const connection = new LocationServerConnection("wss://" + window.location.host);
const world = document.getElementById("world") as HTMLInputElement;

const me = new Attendee("username", 50, 50);
me.onMovement(connection.sendMovement);

const localControls = new Controls(me);
localControls.connect();


const worldContents: Entity[] = [
  me
];


function createVisualEntity(item: Entity, visualId: string) {
  var div = document.createElement("div");
  div.id = visualId;
  div.classList.add("entity");
  div.classList.add(item.constructor.name);
  world.appendChild(div);
  return div;
}

function render() {
  
  for (let item of worldContents) {
    const visualId = `entity-${item.id}`;
    let visualEntity = document.getElementById(visualId);
    visualEntity = visualEntity == null ? createVisualEntity(item, visualId) : visualEntity;
    
    visualEntity.style.left = item.x + "px";
    visualEntity.style.top = item.y + "px";
  }
  
}

setInterval(() => render(), 33);