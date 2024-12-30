import { CTX, drawingInfo, TEMP } from "./canvas.js";

export const TEXT_HIDDEN = document.getElementById("writeText");

export function textInit() {
  TEMP.addEventListener("click", (e) => {
    if (drawingInfo.drawingMode === "text") {
      if (TEXT_HIDDEN.value !== "" || TEXT_HIDDEN.innerHTML !== "") {
        CTX.font = "16px serif";
        CTX.fillText(TEXT_HIDDEN.value, drawingInfo.x, drawingInfo.y);
        TEXT_HIDDEN.style.value = "";
        TEXT_HIDDEN.value = "";
        TEXT_HIDDEN.innerHTML = "";
        TEXT_HIDDEN.style.top = -400 + "px";
        TEXT_HIDDEN.style.left = -20 + "px";
      }
    }
  });
}
