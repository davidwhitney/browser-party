import { Entity, Move } from "../types";

export class Attendee implements Entity {
  
  public id: string;
  public x: number;
  public y: number;
  public movementSpeed: number;  
  public onMovementCallback: any;
    
  constructor(id: string, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.movementSpeed = 5;
  }

  public move(movement: Move) {        
    this.x += (movement.deltaX * this.movementSpeed);
    this.y += (movement.deltaY * this.movementSpeed);
  }

  public onMovement(callback) {
    this.onMovementCallback = callback;
  }
}