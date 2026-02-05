import { CanvasObject } from "./canvasObject"

export class Square extends CanvasObject {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.width)
        this.drawSelection(ctx)
    }

    containsPoint(px: number, py: number): boolean {
        return (px >= this.x && px <= this.x + this.width && py >= this.y && py <= this.y + this.width)
    }
}