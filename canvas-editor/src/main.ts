import { CanvasObject } from "./canvasObject"
import { clearCanvas, renderCanvas } from "./canvasRenderer"
import { updatePropertiesPanel } from "./propertiesTab"

const canvas=document.getElementById("canvas") as HTMLCanvasElement
let objects: CanvasObject[] = []
let selectedObject: CanvasObject | null

const createBtn = document.getElementById("createBtn") as HTMLInputElement
createBtn.addEventListener("click", () => {
    const width = Number(widthInput.value)
    const height = Number(heightInput.value)
    const color = colorInput.value

    const x = Math.random() * (canvas.width - width);
    const y = Math.random() * (canvas.height - height);

    const obj = new CanvasObject(x,y,width,height,color)

    objects.push(obj)
    renderCanvas(objects)
})

const resetCanvas = document.getElementById("resetCanvas") as HTMLInputElement
resetCanvas.addEventListener("click", () => {
  clearCanvas()
  objects = []
})

const widthInput = document.getElementById("widthInput") as HTMLInputElement
const heightInput = document.getElementById("heightInput") as HTMLInputElement
const colorInput = document.getElementById("colorInput") as HTMLInputElement
canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  selectedObject = null

  for(let i = objects.length - 1; i>=0; i--){
    const obj=objects[i]

    if(obj.containsPoint(mouseX, mouseY)) {
      selectedObject = obj
      break
    }
  }

  for(const obj of objects) {
    obj.isSelected = obj === selectedObject
  }

  updatePropertiesPanel(selectedObject)
  renderCanvas(objects)
})