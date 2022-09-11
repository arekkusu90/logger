import _colors from "./colors.json";
import type { Color } from "./types";

const colors: Record<string, string> = _colors;

export const isNumber = (val: any) => typeof val === "number";
export const isFunction = (val: any) => typeof val === "function";

export const isString = (val: any) => {
  return typeof val === "string" || val instanceof String;
};

export const isClass = (val: any) => {
  return isFunction(val) && val.toString().startsWith("class ");
};

export const chunk = <T>(arr: T[], chunkSize = 1): T[][] => {
  chunkSize = Math.max(chunkSize, 1);
  const tmp = [...arr];
  let result: T[][] = [];
  while (tmp.length) result.push(tmp.splice(0, chunkSize));
  return result;
};

export const getColor = (color: Color) => {
  return colors[color] || color;
};
