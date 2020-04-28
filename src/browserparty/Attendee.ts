import { Location } from "../types";

export class Attendee implements Location {
  
  public name: string;
  public x: number;
  public y: number;
  
  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.x = x;
    this.y = y;
   // this.location = { x, y };
  }
}