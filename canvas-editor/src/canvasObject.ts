export abstract class CanvasObject {
    x: number
    y: number
    width: number
    height: number
    color: string
    isSelected: boolean=false

    constructor(x: number, y: number, width: number, height: number, color:string) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    abstract draw(ctx: CanvasRenderingContext2D): void
    abstract containsPoint(px: number, py: number): boolean

    protected drawSelection(ctx: CanvasRenderingContext2D) {
        if (this.isSelected) {
            ctx.strokeStyle = "black"
            ctx.lineWidth = 2
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
    }
}