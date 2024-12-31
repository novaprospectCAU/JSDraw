// https://www.rapidtables.com/convert/color/rgb-to-hsl.html 의 rgb -> hsl 색 변환 공식을 적용
export function rgbToHsl(r, g, b) {
  r /= 256.0;
  g /= 256.0;
  b /= 256.0;
  const Cmax = Math.max(r, g, b);
  const Cmin = Math.min(r, g, b);
  const delta = Cmax - Cmin;
  let hslH, hslS, hslL;
  hslL = (Cmax + Cmin) / 2;

  if (delta === 0) {
    hslH = 0;
    hslS = 0;
  } else {
    hslS = delta / (1 - Math.abs(2 * hslL - 1));
    if (Cmax === r) {
      hslH = 60 * (((g - b) / delta) % 6);
    } else if (Cmax === g) {
      hslH = 60 * ((b - r) / delta + 2);
    } else {
      hslH = 60 * ((r - g) / delta + 4);
    }
  }
  hslS *= 100;
  hslL *= 100;
  return { h: Math.round(hslH), s: Math.round(hslS), l: Math.round(hslL) };
}
