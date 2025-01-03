import { CTX, drawingInfo } from "./canvas.js";

export function penMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function penMouseMove(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 1;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function penMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineWidth = 1;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = 0;
  drawingInfo.y = 0;
}
