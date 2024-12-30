export const COLOR_PICKER = document.getElementById("picker");
export const COLOR_PICKER_CTX = COLOR_PICKER.getContext("2d");

export function colorInit() {
  COLOR_PICKER.setAttribute("width", window.innerWidth);
  COLOR_PICKER.setAttribute("height", window.innerHeight);
  COLOR_PICKER.style.width = `${window.innerWidth}px`;
  COLOR_PICKER.style.height = `${window.innerHeight}px`;
}
