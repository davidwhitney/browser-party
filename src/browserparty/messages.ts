import { Location, Move, Entity } from "../types";

export interface MessageBody { 
  type: string;
}

export interface Movement extends MessageBody {
  type: 'movement';
  move: Move
}

export interface Join extends MessageBody {
  type: 'join';
  join: boolean
}

export class Message<T> {
  
  public sender: Entity;
  public body: T;
  
  constructor(sender: Entity, body: T) {
    this.sender = sender;
    this.body = body;    
  }
}
