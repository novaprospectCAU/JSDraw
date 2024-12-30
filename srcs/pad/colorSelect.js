import { drawingInfo } from "../canvas/canvas.js";

const TEXTAREA_H = document.getElementById("h");
const TEXTAREA_S = document.getElementById("s");
const TEXTAREA_L = document.getElementById("l");

const SUBMIT = document.getElementById("submitColor");

export function hslInit() {
  let textH = "180";
  let textS = "100";
  let textL = "0";
  SUBMIT.addEventListener("click", (e) => {
    if (TEXTAREA_H.value !== null) {
      textH = TEXTAREA_H.value;
    }
    if (TEXTAREA_S.value !== null) {
      textS = TEXTAREA_S.value;
    }
    if (TEXTAREA_L.value !== null) {
      textL = TEXTAREA_L.value;
    }
    console.log(drawingInfo.currentColor);
    console.log(textH, textS, textL);
    console.log(TEXTAREA_H);
    drawingInfo.updateColor(`hsl(${textH}deg, ${textS}%, ${textL}%)`);
  });
}
