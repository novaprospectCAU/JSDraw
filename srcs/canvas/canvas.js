export const CANVAS = document.getElementById("paper");
export const CTX = CANVAS.getContext("2d");

export const { WIDTH, HEIGHT } = CANVAS;

// 현재 그림도구에 대한 클래스
class DrawingInfo {
  constructor() {
    this.drawingMode = "pen";
    this.currentColor = "hsl(180deg, 0%, 0%)";
  }
}

export const drawingInfo = new DrawingInfo();
