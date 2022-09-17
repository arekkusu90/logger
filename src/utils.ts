import _colors from "./colors.json";
import type { Color } from "./types";

const colors: Record<string, string> = _colors;

export const isNumber = (val: any) => typeof val === "number";

export const getColor = (color: Color) => {
  return colors[color] || color;
};
