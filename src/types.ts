export interface Entity extends Location {
  id: string, 
  x: number, 
  y: number 
}

export type Location = { x: number, y: number };
export type Move = { deltaX: number, deltaY: number };