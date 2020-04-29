import { Location, Move, Entity } from "../types";

class Message {
  
  public sender: string;
  public body: any;
  
  constructor(senderId: string, body:any) {
    this.sender = senderId;
    this.body = body;
    
  }
}

export class LocationServerConnection {  
  private serverUrl: string;
  private ws: WebSocket;
  
  constructor(websocketServer: string) {
    this.serverUrl = websocketServer;
    this.ws = new WebSocket(this.serverUrl);
    this.ws.onopen = function() {
     console.log("Web socket connected.");   
    };

    this.ws.onmessage = function(evt) { 
     const unpacked = JSON.parse(evt.data);
    };

    this.ws.onclose = function() {
      console.log("Closed connection");
    };    
  }

  public sendMovement(entity: Entity, movementDelta: Move) {
    console.log("send movement");
  }

  public sendMessage() {
    const payload = {
      //name: nameTextbox.value,
     // message: messageTextbox.value
    };

    this.ws.send(JSON.stringify(payload));
  }
}