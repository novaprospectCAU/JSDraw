import { drawingInfo, CTX, TEMP_CTX, WIDTH, HEIGHT } from "./canvas.js";

export function circleMouseDown(e) {
  drawingInfo.x = e.offsetX;
  drawingInfo.y = e.offsetY;
}

export function circleMouseMove(e) {
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  TEMP_CTX.beginPath();
  TEMP_CTX.strokeStyle = drawingInfo.currentColor;
  TEMP_CTX.lineCap = "round";
  TEMP_CTX.lineJoin = "round";
  TEMP_CTX.lineWidth = 1;
  TEMP_CTX.arc(
    (e.offsetX + drawingInfo.x) / 2,
    (e.offsetY + drawingInfo.y) / 2,
    Math.sqrt(
      (e.offsetX - (e.offsetX + drawingInfo.x) / 2) *
        (e.offsetX - (e.offsetX + drawingInfo.x) / 2) +
        (e.offsetY - (e.offsetY + drawingInfo.y) / 2) *
          (e.offsetY - (e.offsetY + drawingInfo.y) / 2)
    ),
    0,
    Math.PI * 2
  );
  TEMP_CTX.stroke();
}

export function circleMouseUp(e) {
  CTX.beginPath();
  CTX.strokeStyle = drawingInfo.currentColor;
  CTX.lineCap = "round";
  CTX.lineJoin = "round";
  CTX.lineWidth = 1;
  CTX.arc(
    (e.offsetX + drawingInfo.x) / 2,
    (e.offsetY + drawingInfo.y) / 2,
    Math.sqrt(
      (e.offsetX - (e.offsetX + drawingInfo.x) / 2) *
        (e.offsetX - (e.offsetX + drawingInfo.x) / 2) +
        (e.offsetY - (e.offsetY + drawingInfo.y) / 2) *
          (e.offsetY - (e.offsetY + drawingInfo.y) / 2)
    ),
    0,
    Math.PI * 2
  );
  CTX.stroke();

  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
}
