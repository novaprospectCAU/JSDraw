export const COLOR_PALETTE = document.getElementById("palette");
export const COLOR_PALETTE_CTX = COLOR_PALETTE.getContext("2d");
export const COLOR_PICKER = document.getElementById("picker");
export const COLOR_PICKER_CTX = COLOR_PICKER.getContext("2d");

export function colorInit() {
  COLOR_PALETTE.setAttribute("width", window.innerWidth);
  COLOR_PALETTE.setAttribute("height", window.innerHeight);
  COLOR_PALETTE.style.width = `${window.innerWidth}px`;
  COLOR_PALETTE.style.height = `${window.innerHeight}px`;
  COLOR_PICKER.setAttribute("width", window.innerWidth);
  COLOR_PICKER.setAttribute("height", window.innerHeight);
  COLOR_PICKER.style.width = `${window.innerWidth}px`;
  COLOR_PICKER.style.height = `${window.innerHeight}px`;

  paletteInit();
}

export function paletteInit() {
  const pWIDTH = COLOR_PALETTE.width;
  const pHEIGHT = COLOR_PALETTE.height;
  const pCenterX = pWIDTH / 2;
  const pCenterY = pHEIGHT / 2;
  const RADIAN = Math.PI / 180;

  for (let angle = 0; angle < 360; angle++) {
    COLOR_PALETTE_CTX.beginPath();
    COLOR_PALETTE_CTX.moveTo(pCenterX, pCenterY);
    COLOR_PALETTE_CTX.arc(
      pCenterX,
      pCenterY,
      pWIDTH,
      angle * RADIAN,
      (angle + 1) * RADIAN
    );
    COLOR_PALETTE_CTX.closePath();
    COLOR_PALETTE_CTX.fillStyle = `hsl(${(angle + 90) % 360}, 100%, 50%)`;
    COLOR_PALETTE_CTX.fill();
  }
}
