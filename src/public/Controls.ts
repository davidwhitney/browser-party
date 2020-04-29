import { Location, Move, Entity } from "../types";

export class Controls {
  public target: Entity;
  public movementSpeed: number;

  constructor(targetOfControl: Entity, movementSpeed: number = 5) {
    this.target = targetOfControl;
    this.movementSpeed = movementSpeed;
  }
  
  public processInput(keyPressed: any) {
    
    const toMove = (key: string): Move => {
      switch(key) {
        case "ArrowUp": return { deltaX: 0, deltaY: -1 };
        case "ArrowLeft": return { deltaX: -1, deltaY: 0 };
        case "ArrowDown": return { deltaX: 0, deltaY: 1 };
        case "ArrowRight": return { deltaX: 1, deltaY: 0 };
        default:  return { deltaX: 0, deltaY: 0 };
      }    
    };   
    
    this.target.move(toMove(keyPressed.key));
  }
  
  public connect() {
    window.addEventListener("keydown", (args) => {
      this.processInput(args);
    }, false);    
  }
}