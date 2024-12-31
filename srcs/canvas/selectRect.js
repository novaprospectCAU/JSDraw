import {
  drawingInfo,
  CTX,
  TEMP_CTX,
  WIDTH,
  HEIGHT,
  TEMP,
  CANVAS,
} from "./canvas.js";

const SELECT_RECT = document.getElementById("selectRect");
const SELECT_RECT_CTX = SELECT_RECT.getContext("2d", {
  willReadFrequently: true,
});

let isDragging = false;
let draggingX = 0;
let draggingY = 0;
let absoluteLeft = 0;
let absoluteTop = 0;

export function selectRectInit() {
  SELECT_RECT.setAttribute("width", 1);
  SELECT_RECT.setAttribute("height", 1);
  SELECT_RECT.style.width = `1px`;
  SELECT_RECT.style.height = `1px`;

  SELECT_RECT.addEventListener("blur", (e) => {
    if (isDragging) {
      CTX.drawImage(SELECT_RECT, drawingInfo.x, drawingInfo.y);

      SELECT_RECT.clearRect(0, 0, WIDTH, HEIGHT);
      SELECT_RECT.style.width = 1 + "px";
      SELECT_RECT.style.height = 1 + "px";
      SELECT_RECT.style.top = -20000 + "px";
      SELECT_RECT.style.left = -20000 + "px";

      drawingInfo.x = 0;
      drawingInfo.y = 0;
      isDragging = false;
    }
  });

  SELECT_RECT.addEventListener("mousedown", (e) => {
    isDragging = true;
    absoluteLeft = parseInt(SELECT_RECT.style.left.split("px")[0]);
    absoluteTop = parseInt(SELECT_RECT.style.top.split("px")[0]);
    draggingX = e.offsetX;
    draggingY = e.offsetY;

    e.preventDefault();
  });

  SELECT_RECT.addEventListener("mousemove", (e) => {
    if (isDragging) {
      SELECT_RECT.style.left = `${absoluteLeft + e.offsetX}px`;
      SELECT_RECT.style.top = `${absoluteTop + e.offsetY}px`;
      draggingX = e.offsetX;
      draggingY = e.offsetY;
    }
  });

  SELECT_RECT.addEventListener("mouseup", (e) => {
    if (isDragging) {
      isDragging = false;
    }
  });
}

export function selectRectMouseDown(e) {
  drawingInfo.x = e.clientX;
  drawingInfo.y = e.clientY;
}

export function selectRectMouseMove(e) {
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);
  TEMP_CTX.beginPath();
  TEMP_CTX.strokeStyle = "black";
  TEMP_CTX.lineCap = "round";
  TEMP_CTX.lineJoin = "round";
  TEMP_CTX.lineWidth = 2;
  TEMP_CTX.strokeRect(
    drawingInfo.x,
    drawingInfo.y,
    e.offsetX - drawingInfo.x,
    e.offsetY - drawingInfo.y
  );
}

export function selectRectMouseUp(e) {
  const selectRectWidth = e.offsetX - drawingInfo.x;
  const selectRectHeight = e.offsetY - drawingInfo.y;

  SELECT_RECT_CTX.clearRect(0, 0, SELECT_RECT.width, SELECT_RECT.height);
  TEMP_CTX.clearRect(0, 0, WIDTH, HEIGHT);

  SELECT_RECT.setAttribute("width", selectRectWidth);
  SELECT_RECT.setAttribute("height", selectRectHeight);
  SELECT_RECT.style.width = selectRectWidth + "px";
  SELECT_RECT.style.height = selectRectHeight + "px";
  SELECT_RECT.style.left = `${e.offsetX - selectRectWidth}px`;
  SELECT_RECT.style.top = `${e.offsetY - selectRectHeight}px`;

  SELECT_RECT_CTX.drawImage(
    CANVAS,
    drawingInfo.x,
    drawingInfo.y,
    selectRectWidth,
    selectRectHeight,
    0,
    0,
    selectRectWidth,
    selectRectHeight
  );
  CTX.clearRect(
    drawingInfo.x,
    drawingInfo.y,
    selectRectWidth,
    selectRectHeight
  );

  isDragging = false;
  SELECT_RECT.focus();
}
