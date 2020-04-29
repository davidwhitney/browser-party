import { Location, Move, Entity } from "../types";

export interface Movement {
  move: Move
}

export interface Join extends MessageBody {
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
