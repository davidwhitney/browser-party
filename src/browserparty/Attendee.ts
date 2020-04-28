import { Location } from "../types";

export class Attendee {
  
  public name: string;
  public location: Location;
  
  constructor(name: string, x: number, y: number) {
    this.name = name;
    this.location = { x, y };
  }
}