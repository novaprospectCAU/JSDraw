export const CANVAS = document.getElementById("paper");
export const CTX = CANVAS.getContext("2d");

// export const { WIDTH, HEIGHT } = CANVAS;

CANVAS.setAttribute("width", window.innerWidth);
CANVAS.setAttribute("height", window.innerHeight);
CANVAS.style.width = `${window.innerWidth}px`;
CANVAS.style.height = `${window.innerHeight}px`;

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

export const drawingInfo = new DrawingInfo();

CANVAS.addEventListener("mousedown", (e) => {
  drawingInfo.isDrawing = true;
  switch (drawingInfo.drawingMode) {
    case "pen": {
      drawingInfo.x = e.offsetX;
      drawingInfo.y = e.offsetY;

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
});

CANVAS.addEventListener("mousemove", (e) => {
  if (drawingInfo.isDrawing) {
    switch (drawingInfo.drawingMode) {
      case "pen": {
        CTX.beginPath();
        CTX.strokeStyle = drawingInfo.currentColor;
        CTX.lineCap = "round";
        CTX.lineWidth = 1;
        CTX.moveTo(drawingInfo.x, drawingInfo.y);
        CTX.lineTo(e.offsetX, e.offsetY);
        CTX.stroke();
        drawingInfo.x = e.offsetX;
        drawingInfo.y = e.offsetY;
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

window.addEventListener("mouseup", (e) => {
  if (drawingInfo.isDrawing) {
    drawingInfo.isDrawing = false;
    switch (drawingInfo.drawingMode) {
      case "pen": {
        CTX.beginPath();
        CTX.strokeStyle = drawingInfo.currentColor;
        CTX.lineWidth = 1;
        CTX.moveTo(drawingInfo.x, drawingInfo.y);
        CTX.lineTo(e.offsetX, e.offsetY);
        CTX.stroke();
        drawingInfo.x = 0;
        drawingInfo.y = 0;
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
