import { Location, Move, Entity } from "../types";

export interface MessageBody { 
  type: string;
}

export interface Movement extends MessageBody {
  type: 'movement';
}

export interface Join extends MessageBody {
  type: 'join';
  join: boolean
}

export class RoomState {
  public contents: Entity[];
  constructor(contents: Entity[]) {
    this.contents = contents;
  }
}

export class Message<T> {
  
  public sender: Entity;
  public body: T;
  
  constructor(sender: Entity, body: T) {
    this.sender = sender;
    this.body = body;    
  }
}
