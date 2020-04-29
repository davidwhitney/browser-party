import { Attendee } from "../browserparty/Attendee";
import { IDrawable, Entity } from "../types";

const world = document.getElementById("world") as HTMLInputElement;

function createVisualEntity(item: IDrawable, visualId: string) {
  var div = document.createElement("div");
  div.id = visualId;
  div.classList.add("entity");
  div.classList.add(item.constructor.name);
  world.appendChild(div);
  return div;
}

export function render(worldContents: IDrawable[]) {
  
  for (let item of worldContents) {
    const visualId = `entity-${item.id}`;
    let visualEntity = document.getElementById(visualId);
    visualEntity = visualEntity == null ? createVisualEntity(item, visualId) : visualEntity;
    
    visualEntity.style.left = item.x + "px";
    visualEntity.style.top = item.y + "px";
  }  
}