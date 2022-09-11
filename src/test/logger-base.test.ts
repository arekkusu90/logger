import { vi, expect, describe, it, afterEach } from "vitest";
import Logger from "../";

// Edit an assertion and save to see HMR in action
const consoleMock = {
  log: vi.fn(),
  debug: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  group: vi.fn(),
  groupCollapsed: vi.fn(),
  groupEnd: vi.fn(),
};

vi.stubGlobal("console", consoleMock);

describe("Print to console", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Should not log", () => {
    const log = vi.spyOn(console, "log");
    const logger = new Logger();
    logger.text("some text").color("red-500");
    expect(log).toHaveBeenCalledTimes(0);
  });

  it("Should log once", () => {
    const log = vi.spyOn(console, "log");
    const logger = new Logger();
    logger.text("some text").log();
    expect(log).toHaveBeenCalledTimes(1);
  });

  it("Should log multiple times", () => {
    const log = vi.spyOn(console, "log");
    const logger = new Logger();
    logger.text("some text").log();
    logger.text("second").log();
    logger.text("third").log();
    expect(log).toHaveBeenCalledTimes(3);
  });

  it("Should use the correct level", () => {
    const log = vi.spyOn(console, "log");
    const debug = vi.spyOn(console, "debug");
    const error = vi.spyOn(console, "error");
    const warn = vi.spyOn(console, "warn");
    const group = vi.spyOn(console, "group");
    const groupCollapsed = vi.spyOn(console, "groupCollapsed");
    const groupEnd = vi.spyOn(console, "groupEnd");

    const logger = new Logger();
    logger.text("log").log();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(0);
    expect(error).toHaveBeenCalledTimes(0);
    expect(warn).toHaveBeenCalledTimes(0);
    expect(group).toHaveBeenCalledTimes(0);
    expect(groupCollapsed).toHaveBeenCalledTimes(0);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("debug").debug();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(0);
    expect(warn).toHaveBeenCalledTimes(0);
    expect(group).toHaveBeenCalledTimes(0);
    expect(groupCollapsed).toHaveBeenCalledTimes(0);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("error").error();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(0);
    expect(group).toHaveBeenCalledTimes(0);
    expect(groupCollapsed).toHaveBeenCalledTimes(0);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("warn").warn();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(group).toHaveBeenCalledTimes(0);
    expect(groupCollapsed).toHaveBeenCalledTimes(0);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("group").group();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(group).toHaveBeenCalledTimes(1);
    expect(groupCollapsed).toHaveBeenCalledTimes(0);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("group collapsed").groupCollapsed();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(group).toHaveBeenCalledTimes(1);
    expect(groupCollapsed).toHaveBeenCalledTimes(1);
    expect(groupEnd).toHaveBeenCalledTimes(0);

    logger.text("group end").groupEnd();
    expect(log).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(group).toHaveBeenCalledTimes(1);
    expect(groupCollapsed).toHaveBeenCalledTimes(1);
    expect(groupEnd).toHaveBeenCalledTimes(1);
  });

  it("Should format expr() without styles", () => {
    const log = vi.spyOn(console, "log");

    const logger = new Logger();
    logger.log();
    expect(log).toHaveBeenLastCalledWith("");

    logger.expr("text").log();
    expect(log).toHaveBeenLastCalledWith("%o", "text");

    logger.expr(undefined).log();
    expect(log).toHaveBeenLastCalledWith("%o", undefined);

    logger.expr(null).log();
    expect(log).toHaveBeenLastCalledWith("%o", null);

    logger.expr(5).log();
    expect(log).toHaveBeenLastCalledWith("%o", 5);

    logger.expr(NaN).log();
    expect(log).toHaveBeenLastCalledWith("%o", NaN);

    logger.expr(true).log();
    expect(log).toHaveBeenLastCalledWith("%o", true);

    logger.expr("").log();
    expect(log).toHaveBeenLastCalledWith("%o", "");

    logger.expr("true").log();
    expect(log).toHaveBeenLastCalledWith("%o", "true");

    logger.expr("0").log();
    expect(log).toHaveBeenLastCalledWith("%o", "0");

    logger.expr([]).log();
    expect(log).toHaveBeenLastCalledWith("%o", []);

    // prettier-ignore
    logger.expr([undefined, null, 99, "", true, [], {}]).log();
    // prettier-ignore
    expect(log).toHaveBeenLastCalledWith("%o", [undefined, null, 99, "", true, [], {}]);

    logger.expr({}).log();
    expect(log).toHaveBeenLastCalledWith("%o", {});

    // prettier-ignore
    logger.expr({a: undefined, b: null, c: 0, d: false, e: "", f: [], g: {}}).log();
    // prettier-ignore
    expect(log).toHaveBeenLastCalledWith("%o", {a: undefined, b: null, c: 0, d: false, e: "", f: [], g: {}});

    const fnArrow = () => {};
    logger.expr(fnArrow).log();
    expect(log).toHaveBeenLastCalledWith("%o", fnArrow);

    const fn = function () {};
    logger.expr(fn).log();
    expect(log).toHaveBeenLastCalledWith("%o", fn);

    class Test {}
    logger.expr(Test).log();
    expect(log).toHaveBeenLastCalledWith("%o", Test);

    logger.expr(Math.PI).log();
    expect(log).toHaveBeenLastCalledWith("%o", Math.PI);

    logger.expr(Math.abs(-7)).log();
    expect(log).toHaveBeenLastCalledWith("%o", 7);
  });

  it("Should format the text() with styles", () => {
    const log = vi.spyOn(console, "log");

    const logger = new Logger();

    logger.text("text").log();
    expect(log).toHaveBeenLastCalledWith("%c%s", "", "text");

    logger.text("text").style("font-weight: bold").log();
    expect(log).toHaveBeenLastCalledWith("%c%s", "font-weight: bold", "text");

    logger.text("text").style("font-weight: bold").style("color: red").log();
    expect(log).toHaveBeenLastCalledWith(
      "%c%s",
      "font-weight: bold; color: red",
      "text"
    );

    logger
      .text("text")
      .style("font-weight: bold")
      .style("color: red")
      .style("font-size: 44px;")
      .log();
    expect(log).toHaveBeenLastCalledWith(
      "%c%s",
      "font-weight: bold; color: red; font-size: 44px",
      "text"
    );

    logger
      .text("I")
      .style("font-weight: bold")
      .text("love")
      .style("font-weight: bold")
      .style("color: #FF0000")
      .text("vitest")
      .style("font-weight: bold")
      .log();
    expect(log).toHaveBeenLastCalledWith(
      "%c%s%c%s%c%s",
      "font-weight: bold",
      "I",
      "font-weight: bold; color: #FF0000",
      "love",
      "font-weight: bold",
      "vitest"
    );
  });

  it("Should handle expr() and text() mix", () => {
    const log = vi.spyOn(console, "log");

    const logger = new Logger();

    logger.expr(5).text("text").log();
    expect(log).toHaveBeenLastCalledWith("%o%c%s", 5, "", "text");

    logger.text("text").expr(5).log();
    expect(log).toHaveBeenLastCalledWith("%c%s%o", "", "text", 5);

    logger.expr(5).text("text").expr(2).log();
    expect(log).toHaveBeenLastCalledWith("%o%c%s%o", 5, "", "text", 2);

    logger.text("text").expr(5).text("second").log();
    // prettier-ignore
    expect(log).toHaveBeenLastCalledWith("%c%s%o%c%s", "", "text", 5, "", "second");
  });
});
