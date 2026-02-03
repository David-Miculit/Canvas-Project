import { CanvasObject } from "./canvasObject"

const canvas=document.getElementById("canvas") as HTMLCanvasElement
const ctx=canvas.getContext("2d") as CanvasRenderingContext2D

export function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

export function renderCanvas(objects: CanvasObject[]) {
    ctx?.clearRect(0,0,canvas.width, canvas.height)

    for(const obj of objects) {
        obj.draw(ctx)
    }
}