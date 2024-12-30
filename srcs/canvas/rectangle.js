import { drawingInfo, CTX, TEMP_CTX, WIDTH, HEIGHT } from "./canvas.js";

export function rectangleMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function rectangleMouseMove(e) {
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  TEMP_CTX.beginPath();
  TEMP_CTX.strokeStyle = drawingInfo.currentColor;
  TEMP_CTX.lineCap = "round";
  TEMP_CTX.lineJoin = "round";
  TEMP_CTX.lineWidth = 1;
  TEMP_CTX.strokeRect(
    drawingInfo.x,
    drawingInfo.y,
    e.offsetX - drawingInfo.x,
    e.offsetY - drawingInfo.y
  );
}

export function rectangleMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 1;
  CTX.strokeRect(
    drawingInfo.x,
    drawingInfo.y,
    e.offsetX - drawingInfo.x,
    e.offsetY - drawingInfo.y
  );
  drawingInfo.x = 0;
  drawingInfo.y = 0;

  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  console.log(WIDTH, HEIGHT);
}
