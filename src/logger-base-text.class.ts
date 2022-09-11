import type { Color, CssUnitValue, DecorationStyle } from "./types";
import { getColor, isNumber } from "./utils";
import LoggerBase from "./logger-base.class";

export default class LoggerBaseText extends LoggerBase {
  color(color: Color) {
    color = getColor(color);
    this.style(`color: ${color}`);
    return this;
  }

  size(value: CssUnitValue) {
    if (isNumber(value)) value += "px";
    return this.style(`font-size: ${value}`);
  }

  bold() {
    return this.style(`font-weight: bold`);
  }

  italic() {
    return this.style(`font-style: italic`);
  }

  underline(style: DecorationStyle = "solid", color: Color = "currentcolor") {
    color = getColor(color);
    return this.style(`text-decoration: underline ${style} ${color}`);
  }

  overline(style: DecorationStyle = "solid", color: Color = "currentcolor") {
    color = getColor(color);
    return this.style(`text-decoration: overline ${style} ${color}`);
  }

  strikethrough(
    style: DecorationStyle = "solid",
    color: Color = "currentcolor"
  ) {
    color = getColor(color);
    return this.style(`text-decoration: line-through ${style} ${color}`);
  }

  uppercase() {
    return this.style(`text-transform: uppercase`);
  }

  lowercase() {
    return this.style(`text-transform: lowercase`);
  }

  capitalize() {
    return this.style(`text-transform: capitalize`);
  }

  textShadow(value: string) {
    return this.style(`text-shadow: ${value}`);
  }

  emphasis(
    value: string,
    type: "filled" | "open" = "filled",
    color: Color = "currentcolor"
  ) {
    color = getColor(color);
    return this.style(`text-emphasis: ${type} ${value} ${color}`);
  }

  indent(value: CssUnitValue) {
    if (isNumber(value)) value += "px";
    return this.style(`text-indent: ${value}`);
  }

  lineHeight(value: number | string) {
    return this.style(`line-height: ${value}`);
  }

  space(count = 1) {
    return this.text(Array(count).fill(" ").join(""));
  }

  tab(count = 1) {
    return this.text(Array(count).fill("\t").join(""));
  }

  newLine(count = 1) {
    return this.text(Array(count).fill("\n").join(""));
  }
}
