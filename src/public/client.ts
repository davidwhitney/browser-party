import { Attendee } from "../browserparty/Attendee";
import { LocationServerConnection } from "./LocationServerConnection";
import { Move } from "../types";

const world = document.getElementById("world") as HTMLInputElement;
const me = new Attendee("username", 50, 50);

const connection = new LocationServerConnection("wss://" + window.location.host);



