import { CanvasObject } from "./canvasObject"

const propertiesDiv = document.getElementById("properties") as HTMLDivElement

export function updatePropertiesPanel(selectedObject: CanvasObject | null=null) {
  if(!selectedObject) {
    propertiesDiv.innerHTML="Click an object"
    return
  }

  propertiesDiv.replaceChildren()

  const container = document.createElement("div")
  container.className = "space-y-2"

  const makeRow = (label: string, value: string) => {
    const row = document.createElement("div")

    const strong = document.createElement("strong")
    strong.textContent = `${label}: `

    row.appendChild(strong)
    row.appendChild(document.createTextNode(value))

    return row
  }

  container.appendChild(makeRow("X", Math.round(selectedObject.x).toString()))
  container.appendChild(makeRow("Y", Math.round(selectedObject.y).toString()))
  container.appendChild(makeRow("Width", selectedObject.width.toString()))
  container.appendChild(makeRow("Height", selectedObject.height.toString()))

  const colorRow = document.createElement("div")
  colorRow.className = "flex items-center gap-2"

  const colorLabel = document.createElement("strong")
  colorLabel.textContent = "Color:"

  const colorBox = document.createElement("div")
  colorBox.className = "w-5 h-5 border"
  colorBox.style.background = selectedObject.color

  colorRow.appendChild(colorLabel)
  colorRow.appendChild(colorBox)
  container.appendChild(colorRow)
  propertiesDiv.appendChild(container)
}