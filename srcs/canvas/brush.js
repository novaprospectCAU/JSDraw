import { CTX, drawingInfo } from "./canvas.js";

export function brushMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function brushMouseMove(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 10;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function brushMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineWidth = 10;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = 0;
  drawingInfo.y = 0;
}
