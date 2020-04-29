import { Entity, Move } from "../types";

export class Attendee implements Entity {
  
  public id: string;
  public roomId: string;
  public x: number;
  public y: number;
  public movementSpeed: number;  
  public onMovementCallback: any;
    
  constructor(id: string, roomId, string, x: number, y: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.movementSpeed = 5;
    this.onMovementCallback = function(entity, msg) { };
  }

  public move(movement: Move) {        
    this.x += (movement.deltaX * this.movementSpeed);
    this.y += (movement.deltaY * this.movementSpeed);
    this.onMovementCallback(this, movement);
  }

  public onMovement(callback) {
    this.onMovementCallback = callback;
  }
}