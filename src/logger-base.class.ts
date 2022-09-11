import type { LoggerStackItem } from "./types";

export default class LoggerBase {
  protected static readonly TYPE_TEXT = "text";
  protected static readonly TYPE_EXPRESSION = "expression";

  public stack: LoggerStackItem[] = [];

  static getMessageToken(element: LoggerStackItem) {
    if (element.type === LoggerBase.TYPE_EXPRESSION) {
      return "%o";
    }

    return `%c%s`;
  }

  static getStyleString(element: LoggerStackItem) {
    return element.styles.map((el) => el.replace(/;+$/, "")).join("; ");
  }

  constructor() {}

  get last() {
    return this.stack[this.stack.length - 1] ?? null;
  }

  clear() {
    this.stack = [];
    return this;
  }

  expr(expression: any) {
    this.stack.push({
      type: LoggerBase.TYPE_EXPRESSION,
      value: expression,
      styles: [],
    });
    return this;
  }

  text(text: string) {
    this.stack.push({
      type: LoggerBase.TYPE_TEXT,
      value: text,
      styles: [],
    });
    return this;
  }

  // @see https://github.com/ChromeDevTools/devtools-frontend/blob/5165a7a61b1d10354d560dc72dc6409bf21ea5ae/front_end/console/ConsoleViewMessage.js#L895-L907
  style(style: string) {
    if (this.last) this.last.styles.push(style);
    return this;
  }

  printDebug() {
    console.debug(this.build());
    return this;
  }

  print(method: Function) {
    method(...this.build());
    this.clear();
  }

  build() {
    return [this.getMessage(), ...this.getSubstitutionList()];
  }

  getMessage() {
    return this.stack.map((el) => LoggerBase.getMessageToken(el)).join("");
  }

  getSubstitutionList() {
    let result: string[] = [];

    this.stack.forEach((el) => {
      if (el.type === LoggerBase.TYPE_EXPRESSION) {
        return result.push(el.value);
      }

      return result.push(LoggerBase.getStyleString(el), el.value);
    });

    return result;
  }
}
