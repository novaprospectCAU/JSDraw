import { CANVAS, drawingInfo, CTX } from "../canvas/canvas.js";

const MODE_SELECT = document.querySelector(".tool.panel");
const MODE_LIST = MODE_SELECT.querySelectorAll("button");

const ModeSet = [
  "pen",
  "eraser",
  "spoid",
  "brush",
  "ink",
  "text",
  "line",
  "square",
  "rectangle",
  "circle",
  "oval",
  "clear",
];

export function modeInit() {
  for (let index = 0; index < MODE_LIST.length - 1; index++) {
    MODE_LIST[index].addEventListener("click", (e) => {
      console.log(index);
      drawingInfo.drawingMode = ModeSet[index];
    });
  }
  MODE_LIST[MODE_LIST.length - 1].addEventListener("click", (e) => {
    console.log(MODE_LIST.length - 1);
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
  });
}
