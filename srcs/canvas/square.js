import { drawingInfo, CTX, TEMP_CTX, WIDTH, HEIGHT } from "./canvas.js";

export function squareMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function squareMouseMove(e) {
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  TEMP_CTX.beginPath();
  TEMP_CTX.strokeStyle = drawingInfo.currentColor;
  TEMP_CTX.lineCap = "round";
  TEMP_CTX.lineJoin = "round";
  TEMP_CTX.lineWidth = 1;

  if (
    Math.abs(e.offsetX - drawingInfo.x) > Math.abs(e.offsetY - drawingInfo.y)
  ) {
    TEMP_CTX.strokeRect(
      drawingInfo.x,
      drawingInfo.y,
      e.offsetY - drawingInfo.y,
      e.offsetY - drawingInfo.y
    );
  } else {
    TEMP_CTX.strokeRect(
      drawingInfo.x,
      drawingInfo.y,
      e.offsetX - drawingInfo.x,
      e.offsetX - drawingInfo.x
    );
  }
}

export function squareMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 1;

  if (
    Math.abs(e.offsetX - drawingInfo.x) > Math.abs(e.offsetY - drawingInfo.y)
  ) {
    CTX.strokeRect(
      drawingInfo.x,
      drawingInfo.y,
      e.offsetY - drawingInfo.y,
      e.offsetY - drawingInfo.y
    );
  } else {
    CTX.strokeRect(
      drawingInfo.x,
      drawingInfo.y,
      e.offsetX - drawingInfo.x,
      e.offsetX - drawingInfo.x
    );
  }
  drawingInfo.x = 0;
  drawingInfo.y = 0;

  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  console.log(WIDTH, HEIGHT);
}
