import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";
import { Controls } from "./Controls";
import { render } from "./render";
import { Entity } from "../types";

const fps = 30;
const world = document.getElementById("world") as HTMLInputElement;
const usernameBox = document.getElementById("username") as HTMLInputElement;
const connectButton = document.getElementById("connect") as HTMLButtonElement;

let worldContents: Entity[];
let connection: LocationServerConnection;
let me: Attendee;

function join() {
  worldContents = [];
  connection = new LocationServerConnection("wss://" + window.location.host);
  connection.onMessageReceived((message) => {

  });

  const me = new Attendee(usernameBox.value, "room1", 50, 50);
  me.onMovement((entity, move) => connection.sendMovement(entity, move));
  worldContents.push(me);

  new Controls(me).connect();
}

connectButton.addEventListener("click", () => { join(); });
setInterval(() => render(), (1000 / fps));