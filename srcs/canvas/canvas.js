// import { colorInit } from "../pad/colorSelect.js";
import { modeInit } from "../pad/modeSelect.js";
import { brushMouseDown, brushMouseMove, brushMouseUp } from "./brush.js";
import { eraserMouseDown, eraserMouseMove, eraserMouseUp } from "./eraser.js";
import { penMouseDown, penMouseMove, penMouseUp } from "./pen.js";

export const CANVAS = document.getElementById("paper");
export const CTX = CANVAS.getContext("2d");
export const TEMP = document.getElementById("temp");
export const TEMP_CTX = TEMP.getContext("2d");

export const { WIDTH, HEIGHT } = window;

// 현재 그림도구에 대한 클래스
class DrawingInfo {
  constructor() {
    this.drawingMode = "pen";
    this.currentColor = "hsl(180deg, 0%, 0%)";
    this.isDrawing = false;
    this.x = 0;
    this.y = 0;
  }
}

// -----------------------------------------
// main logic

canvasInit();
modeInit();
// colorInit();
export const drawingInfo = new DrawingInfo();

// -----------------------------------------

function canvasInit() {
  CANVAS.setAttribute("width", window.innerWidth);
  CANVAS.setAttribute("height", window.innerHeight);
  CANVAS.style.width = `${window.innerWidth}px`;
  CANVAS.style.height = `${window.innerHeight}px`;

  TEMP.setAttribute("width", window.innerWidth);
  TEMP.setAttribute("height", window.innerHeight);
  TEMP.style.width = `${window.innerWidth}px`;
  TEMP.style.height = `${window.innerHeight}px`;
}

TEMP.addEventListener("mousedown", (e) => {
  drawingInfo.isDrawing = true;
  switch (drawingInfo.drawingMode) {
    case "pen": {
      penMouseDown(e);
      break;
    }
    case "eraser": {
      eraserMouseDown(e);
      break;
    }
    case "spoid": {
      drawingInfo.x = e.offsetX;
      drawingInfo.y = e.offsetY;
      break;
    }
    case "brush": {
      brushMouseDown(e);
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
});

TEMP.addEventListener("mousemove", (e) => {
  if (drawingInfo.isDrawing) {
    switch (drawingInfo.drawingMode) {
      case "pen": {
        penMouseMove(e);
        break;
      }
      case "eraser": {
        eraserMouseMove(e);
        break;
      }
      case "spoid": {
        break;
      }
      case "brush": {
        brushMouseMove(e);
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

window.addEventListener("mouseup", (e) => {
  if (drawingInfo.isDrawing) {
    drawingInfo.isDrawing = false;
    switch (drawingInfo.drawingMode) {
      case "pen": {
        penMouseUp(e);
        break;
      }
      case "eraser": {
        eraserMouseUp(e);
        break;
      }
      case "spoid": {
        break;
      }
      case "brush": {
        brushMouseUp(e);
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
