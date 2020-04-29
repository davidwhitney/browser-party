import { Location, Move, Entity } from "../types";

class Message {
  
  public sender: Entity;
  public body: any;
  
  constructor(sender: Entity, body:any) {
    this.sender = sender;
    this.body = body;    
  }
}

export class LocationServerConnection {  
  private serverUrl: string;
  private ws: WebSocket;
  private onMessageReceivedCallback: any;
  
  constructor(websocketServer: string) {
    this.serverUrl = websocketServer;
    this.ws = new WebSocket(this.serverUrl);
    this.onMessageReceivedCallback = function(message) { };
    
    this.ws.onopen = function() {      
     console.log("Web socket connected.");   
    };

    this.ws.onmessage = (evt) => { 
     const unpacked = JSON.parse(evt.data);
     this.onMessageReceivedCallback(unpacked);
    };

    this.ws.onclose = function() {
      console.log("Closed connection");
    };    
  }

  public onMessageReceived(callback) {
    this.onMessageReceivedCallback = callback;
  }

  public sendMovement(entity: Entity, move: Move) {
    console.log("Sending movement");
    const msg = new Message(entity, { move });
    this.sendMessage(msg);
  }

  private sendMessage(payload) {
    this.ws.send(JSON.stringify(payload));
  }
}