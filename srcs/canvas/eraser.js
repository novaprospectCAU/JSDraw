import { CTX, drawingInfo } from "./canvas.js";

export function eraserMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function eraserMouseMove(e) {
  CTX.beginPath();
  CTX.strokeStyle = "white";
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 5;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function eraserMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = "white";
  CTX.lineWidth = 5;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = 0;
  drawingInfo.y = 0;
}
