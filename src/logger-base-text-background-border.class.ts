import type { Color, CssUnitValue } from "./types";
import { getColor, isNumber } from "./utils";
import LoggerBaseTextBackground from "./logger-base-text-background.class";

export default class LoggerBaseTextBackgroundBorder extends LoggerBaseTextBackground {
  borderTop(width: CssUnitValue, color: Color, type = "solid") {
    if (isNumber(width)) width += "px";
    color = getColor(color);
    return this.style(`border-top: ${width} ${type} ${color}`);
  }

  borderBottom(width: CssUnitValue, color: Color, type = "solid") {
    if (isNumber(width)) width += "px";
    color = getColor(color);
    return this.style(`border-bottom: ${width} ${type} ${color}`);
  }

  borderLeft(width: CssUnitValue, color: Color, type = "solid") {
    if (isNumber(width)) width += "px";
    color = getColor(color);
    return this.style(`border-left: ${width} ${type} ${color}`);
  }

  borderRight(width: CssUnitValue, color: Color, type = "solid") {
    if (isNumber(width)) width += "px";
    color = getColor(color);
    return this.style(`border-right: ${width} ${type} ${color}`);
  }

  borderY(width: CssUnitValue, color: Color, type = "solid") {
    this.borderTop(width, color, type);
    this.borderBottom(width, color, type);
    return this;
  }

  borderX(width: CssUnitValue, color: Color, type = "solid") {
    this.borderLeft(width, color, type);
    this.borderRight(width, color, type);
    return this;
  }

  border(width: CssUnitValue, color: Color, type = "solid") {
    return this.borderY(width, color, type).borderX(width, color, type);
  }

  borderRadius(value: CssUnitValue) {
    if (isNumber(value)) value += "px";
    return this.style(`border-radius: ${value}`);
  }
}
