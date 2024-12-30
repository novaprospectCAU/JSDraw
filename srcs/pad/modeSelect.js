import { drawingInfo } from "../canvas/canvas.js";

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
  "curve",
  "rectangle",
  "polygon",
  "oval",
  "select rect",
  "select poly",
  "clear",
];

export function modeInit() {
  for (let index = 0; index < MODE_LIST.length; index++) {
    MODE_LIST[index].addEventListener("click", (e) => {
      console.log(index);
      drawingInfo.drawingMode = ModeSet[index];
    });
  }
}
