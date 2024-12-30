// export const COLOR_PALETTE = document.getElementById("palette");
// export const COLOR_PALETTE_CTX = COLOR_PALETTE.getContext("2d");
// export const COLOR_PICKER = document.getElementById("picker");
// export const COLOR_PICKER_CTX = COLOR_PICKER.getContext("2d");

// export function colorInit() {
//   COLOR_PALETTE.setAttribute("width", window.innerWidth);
//   COLOR_PALETTE.setAttribute("height", window.innerHeight);
//   COLOR_PALETTE.style.width = `${window.innerWidth}px`;
//   COLOR_PALETTE.style.height = `${window.innerHeight}px`;
//   COLOR_PICKER.setAttribute("width", window.innerWidth);
//   COLOR_PICKER.setAttribute("height", window.innerHeight);
//   COLOR_PICKER.style.width = `${window.innerWidth}px`;
//   COLOR_PICKER.style.height = `${window.innerHeight}px`;

//   paletteInit();
//   // pickerInit();
// }

// export function paletteInit() {
//   const pWIDTH = COLOR_PALETTE.width;
//   const pHEIGHT = COLOR_PALETTE.height;
//   const pCenterX = pWIDTH / 2;
//   const pCenterY = pHEIGHT / 2;
//   const RADIAN = Math.PI / 180;

//   for (let angle = 0; angle < 360; angle++) {
//     for (let saturation = 100; saturation > 0; saturation--) {
//       COLOR_PALETTE_CTX.beginPath();
//       COLOR_PALETTE_CTX.moveTo(pCenterX, pCenterY);
//       COLOR_PALETTE_CTX.arc(
//         pCenterX,
//         pCenterY,
//         pWIDTH * ((saturation + 1) / 100),
//         angle * RADIAN,
//         (angle + 1) * RADIAN
//       );
//       COLOR_PALETTE_CTX.closePath();
//       COLOR_PALETTE_CTX.fillStyle = `hsl(${
//         (angle + 90) % 360
//       }, ${saturation}%, 60%)`;
//       COLOR_PALETTE_CTX.fill();
//     }
//   }

//   COLOR_PICKER.addEventListener("click", (e) => {
//     const rect = COLOR_PICKER.getBoundingClientRect();
//     const x = e.clientX - rect.left - pCenterX;
//     const y = e.clientY - rect.top - pCenterY;
//     const pAngle = Math.atan2(y, x) * (180 / Math.PI);
//     const hue = (pAngle + 360) % 360;
//     console.log(rect);
//     console.log(COLOR_PALETTE);
//     console.log(`hsl(${parseInt(hue)}), 100%, 50%`);
//   });
// }

// // export function pickerInit() {
// //   const pWIDTH = COLOR_PALETTE.width;
// //   const pHEIGHT = COLOR_PALETTE.height;
// //   const pCenterX = pWIDTH / 2;
// //   const pCenterY = pHEIGHT / 2;

// //   COLOR_PICKER.addEventListener("click", (e) => {
// //     let xLength = Math.abs(e.offsetX - pCenterX);
// //     let yLength = Math.abs(e.offsetY - pCenterY);

// //     if (xLength === 0 || yLength === 0) {
// //     } else {
// //       const rad = Math.atan(yLength / xLength);
// //       let angle = (rad * 180) / Math.PI;
// //       angle = parseInt(angle);
// //       console.log(e.clientX, e.clientY, pCenterX, pCenterY);
// //     }
// //   });
// // }
