import { CanvasObject } from "./canvasObject"

export class Circle extends CanvasObject {
    get radiusX() {
        return this.width/ 2
    }

    get radiusY() {
        return this.height / 2
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.ellipse(this.x + this.radiusX, this.y + this.radiusY, this.width/2, this.height/2, 0, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        this.drawSelection(ctx)
    }

    containsPoint(px: number, py: number): boolean {
        const dx = px - (this.x + this.radiusX)
        const dy = py - (this.y + this.radiusY)
        return dx * dx + dy * dy <= this.radiusX * this.radiusY
    }

    drawSelection(ctx: CanvasRenderingContext2D) {
        if (!this.isSelected) return

        ctx.beginPath()
        ctx.ellipse(this.x + this.radiusX, this.y + this.radiusY, this.width/2, this.height/2, 0, 0, Math.PI * 2)
        ctx.strokeStyle = "black"
        ctx.lineWidth = 2
        ctx.stroke()
    }
}