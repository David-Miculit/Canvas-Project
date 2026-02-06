import { CanvasObject } from "./canvasObject"

export class Rectangle extends CanvasObject {
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.drawSelection(ctx)
    }

    containsPoint(px: number, py: number): boolean {
        return (px >= this.x && px <= this.x + this.width && py >= this.y && py <= this.y + this.width)
    }

    drawSelection(ctx: CanvasRenderingContext2D) {
        if (!this.isSelected) return

        ctx.beginPath()
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.stroke()
    }
}