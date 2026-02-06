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
    abstract drawSelection(ctx: CanvasRenderingContext2D): void
}