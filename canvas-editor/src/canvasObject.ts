export class CanvasObject {
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

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y , this.width, this.height)

        if(this.isSelected) {
            ctx.strokeStyle = "black"
            ctx.lineWidth = 2
            ctx.strokeRect(this.x, this.y, this.width,this.height)
        }
    }

    containsPoint(px: number, py:number): boolean {
        return(px>= this.x && px <= this.x +this.width && py >= this.y && py <= this.y + this.height)
    }
}