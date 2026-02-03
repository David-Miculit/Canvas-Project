import { CanvasObject } from "./canvasObject"

const propertiesDiv = document.getElementById("properties") as HTMLDivElement

export function updatePropertiesPanel(selectedObject: CanvasObject | null=null) {
  if(!selectedObject) {
    propertiesDiv.innerHTML="Click an object"
    return
  }

  propertiesDiv.innerHTML=`
    <div class="space-y-2">
      <div><strong>X:</strong> ${Math.round(selectedObject.x)}</div>
      <div><strong>Y:</strong> ${Math.round(selectedObject.y)}</div>
      <div><strong>Width:</strong> ${(selectedObject.width)}</div>
      <div><strong>Height:</strong> ${(selectedObject.height)}</div>
      <div class="flex items-center gap-2">
        <strong> Color:</strong>
        <div class="w-5 h-5 border" style="background:${selectedObject.color}"></div>
      </div>
    </div>
  `
}