import { drawingInfo, CTX, TEMP_CTX, WIDTH, HEIGHT } from "./canvas.js";

export function lineMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function lineMouseMove(e) {
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  TEMP_CTX.beginPath();
  TEMP_CTX.strokeStyle = drawingInfo.currentColor;
  TEMP_CTX.lineCap = "round";
  TEMP_CTX.lineJoin = "round";
  TEMP_CTX.lineWidth = 1;
  TEMP_CTX.moveTo(drawingInfo.x, drawingInfo.y);
  TEMP_CTX.lineTo(e.offsetX, e.offsetY);
  TEMP_CTX.stroke();
}

export function lineMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 1;
  CTX.moveTo(drawingInfo.x, drawingInfo.y);
  CTX.lineTo(e.offsetX, e.offsetY);
  CTX.stroke();
  drawingInfo.x = 0;
  drawingInfo.y = 0;

  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  console.log(WIDTH, HEIGHT);
}
