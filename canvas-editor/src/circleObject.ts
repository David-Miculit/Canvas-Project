import { CanvasObject } from "./canvasObject"

export class Circle extends CanvasObject {
    get radius() {
        return this.width / 2
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        this.drawSelection(ctx)
    }

    containsPoint(px: number, py: number): boolean {
        const dx = px - (this.x + this.radius)
        const dy = py - (this.y + this.radius)
        return dx * dx + dy * dy <= this.radius * this.radius
    }

    drawSelection(ctx: CanvasRenderingContext2D) {
        if (!this.isSelected) return

        ctx.beginPath()
        ctx.arc(this.x + this.radius, this.y + this.radius, this.radius,0, Math.PI * 2)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.stroke()
    }
}