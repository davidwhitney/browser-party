import { Attendee } from "../browserparty/Attendee";

const world = document.getElementById("world") as HTMLInputElement;
const me = new Attendee("username", 50, 50);

const server = "wss://" + window.location.host;


class LocationServerConnection {  
  private ws: WebSocket;
  
  constructor(websocketServer)
  }
  
  public connect() {
    this.ws = new WebSocket(websocketServer);
    this.onopen = function() {
     console.log("Web socket connected.");   
    };

    this.onmessage = function (evt) { 
     const unpacked = JSON.parse(evt.data);
    };

    this.onclose = function() {
    };
  }

  
}


const sendMessage = (event) => {
  const payload = {
    name: nameTextbox.value,
    message: messageTextbox.value
  };
  
  ws.send(JSON.stringify(payload));
};