import LoggerBaseTextBackgroundBorderSpacePrinters from "./logger-base-text-background-border-space-printers.class";

export default class Logger extends LoggerBaseTextBackgroundBorderSpacePrinters {
  circle() {
    return this.text("⬤");
  }

  badge() {
    return this.py(2).px(6).borderRadius(4).lineHeight(1);
  }

  chip() {
    return this.py(2).px(6).borderRadius(100).lineHeight(1);
  }

  keyValue(key: string, value: any) {
    return this.text(`${key}: `).bold().expr(value);
  }
}
