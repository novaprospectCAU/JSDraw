import { TEXTAREA_H, TEXTAREA_L, TEXTAREA_S } from "../pad/colorSelect.js";
import { drawingInfo } from "./canvas.js";

export function spoidChangeHSLValue(h, s, l) {
  TEXTAREA_H.value = h;
  TEXTAREA_S.value = s;
  TEXTAREA_L.value = l;

  drawingInfo.updateColor(
    `hsl(${TEXTAREA_H.value}deg, ${TEXTAREA_S.value}%, ${TEXTAREA_L.value}%`
  );
}
