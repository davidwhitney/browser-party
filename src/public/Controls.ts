import { Location, Move } from "../types";

export class Controls {
  public target: Location;
  public movementSpeed: number;

  constructor(targetOfControl: Location, movementSpeed: number = 5) {
    this.target = targetOfControl;
    this.movementSpeed = movementSpeed;
  }
  
  public processInput(keyPressed: any) {
    
    const toMove = (key: string): Move => {
      switch(key) {
        case "w": return { deltaX: 0, deltaY: -1 };
        case "a": return { deltaX: -1, deltaY: 0 };
        case "s": return { deltaX: 0, deltaY: 1 };
        case "d": return { deltaX: 1, deltaY: 0 };
        default:  return { deltaX: 0, deltaY: 0 };
      }    
    };   
    
    const key = keyPressed.key.toLowerCase();
    const movement = toMove(key);    
    this.target.x += (movement.deltaX * this.movementSpeed);
    this.target.y += (movement.deltaY * this.movementSpeed);
  }
  
  public connect() {
    window.addEventListener("keypress", (args) => {
      this.processInput(args);
    }, false);    
  }
}