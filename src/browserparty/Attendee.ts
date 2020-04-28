import { Entity } from "../types";

export class Attendee implements Entity {
  
  public id: string;
  public x: number;
  public y: number;
  
  constructor(id: string, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
   // this.location = { x, y };
  }
}