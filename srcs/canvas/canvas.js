// import { colorInit } from "../pad/colorSelect.js";
import { hslInit } from "../pad/colorSelect.js";
import { modeInit } from "../pad/modeSelect.js";
import { brushMouseDown, brushMouseMove, brushMouseUp } from "./brush.js";
import { circleMouseDown, circleMouseMove, circleMouseUp } from "./circle.js";
import { eraserMouseDown, eraserMouseMove, eraserMouseUp } from "./eraser.js";
import { lineMouseDown, lineMouseMove, lineMouseUp } from "./line.js";
import { ovalMouseDown, ovalMouseMove, ovalMouseUp } from "./oval.js";
import { penMouseDown, penMouseMove, penMouseUp } from "./pen.js";
import {
  rectangleMouseDown,
  rectangleMouseMove,
  rectangleMouseUp,
} from "./rectangle.js";
import { squareMouseDown, squareMouseMove, squareMouseUp } from "./square.js";

export const CANVAS = document.getElementById("paper");
export const CTX = CANVAS.getContext("2d");
export const TEMP = document.getElementById("temp");
export const TEMP_CTX = TEMP.getContext("2d");

export let WIDTH = CANVAS.width;
export let HEIGHT = CANVAS.height;

// 현재 그림도구에 대한 클래스
class DrawingInfo {
  constructor() {
    this.drawingMode = "pen";
    this.currentColor = "hsl(180deg, 0%, 0%)";
    this.isDrawing = false;
    this.x = 0;
    this.y = 0;
  }
  updateColor(string) {
    this.currentColor = string;
  }
}

// -----------------------------------------
// main logic

// colorInit();
export const drawingInfo = new DrawingInfo();
canvasInit();
modeInit();
hslInit();

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

  WIDTH = CANVAS.width;
  HEIGHT = CANVAS.height;
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
      lineMouseDown(e);
      break;
    }
    case "square": {
      squareMouseDown(e);
      break;
    }
    case "rectangle": {
      rectangleMouseDown(e);
      break;
    }
    case "circle": {
      circleMouseDown(e);
      break;
    }
    case "oval": {
      ovalMouseDown(e);
      break;
    }
    case "select rect": {
      break;
    }
    case "select poly": {
      break;
    }
    case "clear": {
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
        lineMouseMove(e);
        break;
      }
      case "square": {
        squareMouseMove(e);
        break;
      }
      case "rectangle": {
        rectangleMouseMove(e);
        break;
      }
      case "circle": {
        circleMouseMove(e);
        break;
      }
      case "oval": {
        ovalMouseMove(e);
        break;
      }
      case "select rect": {
        break;
      }
      case "select poly": {
        break;
      }
      case "clear": {
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
        lineMouseUp(e);
        break;
      }
      case "square": {
        squareMouseUp(e);
        break;
      }
      case "rectangle": {
        rectangleMouseUp(e);
        break;
      }
      case "circle": {
        circleMouseUp(e);
        break;
      }
      case "oval": {
        ovalMouseUp(e);
        break;
      }
      case "select rect": {
        break;
      }
      case "select poly": {
        break;
      }
      case "clear": {
        break;
      }
      default: {
        console.error("도구 선택 오류");
      }
    }
  }
});
