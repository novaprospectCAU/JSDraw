export const CANVAS = document.getElementById("paper");
export const CTX = CANVAS.getContext("2d");

export const { WIDTH, HEIGHT } = CANVAS;

// 현재 그림도구에 대한 클래스
class DrawingInfo {
  constructor() {
    this.drawingMode = "pen";
    this.currentColor = "hsl(180deg, 0%, 0%)";
    this.isDrawing = false;
  }
}

export const drawingInfo = new DrawingInfo();

CANVAS.addEventListener("mousedown", (e) => {
  drawingInfo.isDrawing = true;
});

CANVAS.addEventListener("mousemove", (e) => {
  if (drawingInfo.isDrawing) {
    switch (drawingInfo.drawingMode) {
      case "pen": {
        break;
      }
      case "eraser": {
        break;
      }
      case "spray": {
        break;
      }
      case "brush": {
        break;
      }
      case "ink": {
        break;
      }
      case "text": {
        break;
      }
      case "line": {
        break;
      }
      case "curve": {
        break;
      }
      case "rectangle": {
        break;
      }
      case "polygon": {
        break;
      }
      case "oval": {
        break;
      }
      case "select rect": {
        break;
      }
      case "select poly": {
        break;
      }
      case "magnify": {
        break;
      }
      default: {
        console.error("도구 선택 오류");
      }
    }
  }
});

CANVAS.addEventListener("mouseup", (e) => {
  if (drawingInfo.isDrawing) {
    drawingInfo.isDrawing = false;
    switch (drawingInfo.drawingMode) {
      case "pen": {
        break;
      }
      case "eraser": {
        break;
      }
      case "spray": {
        break;
      }
      case "brush": {
        break;
      }
      case "ink": {
        break;
      }
      case "text": {
        break;
      }
      case "line": {
        break;
      }
      case "curve": {
        break;
      }
      case "rectangle": {
        break;
      }
      case "polygon": {
        break;
      }
      case "oval": {
        break;
      }
      case "select rect": {
        break;
      }
      case "select poly": {
        break;
      }
      case "magnify": {
        break;
      }
      default: {
        console.error("도구 선택 오류");
      }
    }
  }
});
