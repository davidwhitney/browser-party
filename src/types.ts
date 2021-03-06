export interface Entity extends IDrawable {
  roomId: string,
  move(delta: Move): void
}

export interface IDrawable extends Location {
    id: string
}
  
export type Location = { x: number, y: number };
export type Move = { deltaX: number, deltaY: number };