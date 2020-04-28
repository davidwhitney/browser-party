import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";
import { Controls } from "./Controls";

const connection = new LocationServerConnection("wss://" + window.location.host);
const world = document.getElementById("world") as HTMLInputElement;

const me = new Attendee("username", 50, 50);

const localControls = new Controls(me);

const worldContents = [
  me
];


function render() {
  //console.log("Rendering");
}

setInterval(() => render(), 33);