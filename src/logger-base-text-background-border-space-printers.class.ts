import LoggerBaseTextBackgroundBorderSpace from "./logger-base-text-background-border-space.class";

export default class LoggerBaseTextBackgroundBorderSpacePrinters extends LoggerBaseTextBackgroundBorderSpace {
  groupEnd() {
    console.groupEnd();
  }

  debug() {
    return this.print(console.debug);
  }

  log() {
    return this.print(console.log);
  }

  info() {
    return this.print(console.info);
  }

  warn() {
    return this.print(console.warn);
  }

  error() {
    return this.print(console.error);
  }

  group() {
    return this.print(console.group);
  }

  groupCollapsed() {
    return this.print(console.groupCollapsed);
  }
}
