# Logger

## Getting started

Install the logger as a dependency

```bash
$ npm i logger
```

Import the logger

```js
import Logger from "logger";
```

Use the logger

```js
import Logger from "logger";

const logger = new Logger();
logger.text("Some").text("blue").style("color: blue").text("text").log();
```

In the console you should see:

Some <span style="color: blue">blue</span> text

## API - Base

### `expr(vlaue: any): Logger`

```js
logger.expr(Math.random());
```

### `text(value: string): Logger`

```js
logger.text("Random text");
```

### `style(value: string): Logger`

```js
logger.text("text").style("font-size: 32px; color: red;");
```

### `clear(): Logger`

```js
logger.text("text").style("font-size: 32px; color: red;").clear();
```

### `printDebug(): Logger`

```js
logger.text("text").printDebug();
```

### `print(method: Function): void`

```js
logger.text("text").print(console.log);
logger.text("text").print(console.debug);
logger.text("text").print(console.error);
```

## API - Printers

### `log(): void`

```js
logger.text("text").log();
```

### `debug(): void`

```js
logger.text("text").debug();
```

### `info(): void`

```js
logger.text("text").info();
```

### `warn(): void`

```js
logger.text("text").warn();
```

### `error(): void`

```js
logger.text("text").error();
```

### `group(): void`

```js
logger.text("text").group();
```

### `groupCollapsed(): void`

```js
logger.text("text").groupCollapsed();
```

### `groupEnd(): void`

```js
logger.text("text").groupEnd();
```

## API - Text

### `color(color: Color): Logger`

```js
logger.text("text").color("red-500");
logger.text("text").color("white");
logger.text("text").color("#F87CD4");
logger.text("text").color("rgb(124, 85, 208)");
```

### `size(size: CssUnitValue): Logger`

```js
logger.text("text").size(32);
logger.text("text").size("32px");
logger.text("text").size("3em");
logger.text("text").size("1.5rem");
logger.text("text").size("20%");
logger.text("text").size("2vh");
```

### `bold(): Logger`

```js
logger.text("text").bold();
```

### `italic(): Logger`

```js
logger.text("text").italic();
```

### `underline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

```js
logger.text("text").underline();
logger.text("text").underline("wave");
logger.text("text").underline("solid", "blue-100");
logger.text("text").underline("dashed", "yellow");
```

### `overline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

```js
logger.text("text").overline();
logger.text("text").overline("wave");
logger.text("text").overline("solid", "blue-100");
logger.text("text").overline("dashed", "yellow");
```

### `strikethrough(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

```js
logger.text("text").strikethrough();
logger.text("text").strikethrough("wave");
logger.text("text").strikethrough("solid", "blue-100");
logger.text("text").strikethrough("dashed", "yellow");
```

### `uppercase(): Logger`

```js
logger.text("text").uppercase();
```

### `lowercase(): Logger`

```js
logger.text("text").lowercase();
```

### `capitalize(): Logger`

```js
logger.text("text").capitalize();
```

### `textShadow(value: string): Logger`

```js
logger.text("text").textShadow("1px 1px 2px red, 0 0 6px blue, 0 0 3px blue");
```

### `emphasis(value: string, type: "filled" | "open" = "filled", color: Color = "currentcolor"): Logger`

```js
logger.text("text").emphasis("sesame", "filled", "blue-800");
logger.text("text").emphasis("x", "open", "orange");
```

### `indent(value: CssUnitValue): Logger`

```js
logger.text("text").indent(32);
logger.text("text").indent("32px");
logger.text("text").indent("3em");
logger.text("text").indent("1.5rem");
logger.text("text").indent("20%");
logger.text("text").indent("2vh");
```

### `lineHeight(value: string): Logger`

```js
logger.text("text").lineHeight(2);
logger.text("text").lineHeight("100%");
```

### `space(count: number = 1): Logger`

```js
logger.text("text").space();
logger.text("text").space(4);
```

### `tab(count: number = 1): Logger`

```js
logger.text("text").tab();
logger.text("text").tab(4);
```

### `newLine(count: number = 1): Logger`

```js
logger.text("text").newLine();
logger.text("text").newLine(4);
```

## API - Background

### `bgColor(color: Color): Logger`

```js
logger.text("text").color("red-500");
logger.text("text").color("white");
logger.text("text").color("#F87CD4");
logger.text("text").color("rgb(124, 85, 208)");
```

### `bgGradient(direction: CssGradientLinearDirection, ...colorStopList: CssGradientLinearStop[]): Logger`

```js
logger.text("text").bgGradient("to left bottom", "red-300 40%", "yellow-600");
```

## API - Margin & Padding

### `pt(value: CssUnitValue): Logger`

```js
logger.text("text").pt(10);
logger.text("text").pt("1.5em");
logger.text("text").pt("2rem");
```

### `pl(value: CssUnitValue): Logger`

```js
logger.text("text").pl(10);
logger.text("text").pl("1.5em");
logger.text("text").pl("2rem");
```

### `pr(value: CssUnitValue): Logger`

```js
logger.text("text").pr(10);
logger.text("text").pr("1.5em");
logger.text("text").pr("2rem");
```

### `px(value: CssUnitValue): Logger`

```js
logger.text("text").px(10);
logger.text("text").px("1.5em");
logger.text("text").px("2rem");
```

### `py(value: CssUnitValue): Logger`

```js
logger.text("text").py(10);
logger.text("text").py("1.5em");
logger.text("text").py("2rem");
```

### `p(value: CssUnitValue): Logger`

```js
logger.text("text").p(10);
logger.text("text").p("1.5em");
logger.text("text").p("2rem");
```

### `mt(value: CssUnitValue): Logger`

```js
logger.text("text").mt(10);
logger.text("text").mt("1.5em");
logger.text("text").mt("2rem");
```

### `mb(value: CssUnitValue): Logger`

```js
logger.text("text").mb(10);
logger.text("text").mb("1.5em");
logger.text("text").mb("2rem");
```

### `ml(value: CssUnitValue): Logger`

```js
logger.text("text").ml(10);
logger.text("text").ml("1.5em");
logger.text("text").ml("2rem");
```

### `mr(value: CssUnitValue): Logger`

```js
logger.text("text").mr(10);
logger.text("text").mr("1.5em");
logger.text("text").mr("2rem");
```

### `mx(value: CssUnitValue): Logger`

```js
logger.text("text").mx(10);
logger.text("text").mx("1.5em");
logger.text("text").mx("2rem");
```

### `my(value: CssUnitValue): Logger`

```js
logger.text("text").my(10);
logger.text("text").my("1.5em");
logger.text("text").my("2rem");
```

### `m(value: CssUnitValue): Logger`

```js
logger.text("text").m(10);
logger.text("text").m("1.5em");
logger.text("text").m("2rem");
```

## API - Borders

### `borderTop(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderTop(10, "blue");
logger.text("text").borderTop("1.5em", "grey-400");
logger.text("text").borderTop("2rem", "#FF98B8", "dotted");
```

### `borderBottom(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderBottom(10, "blue");
logger.text("text").borderBottom("1.5em", "grey-400");
logger.text("text").borderBottom("2rem", "#FF98B8", "dotted");
```

### `borderLeft(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderLeft(10, "blue");
logger.text("text").borderLeft("1.5em", "grey-400");
logger.text("text").borderLeft("2rem", "#FF98B8", "dotted");
```

### `borderRight(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderRight(10, "blue");
logger.text("text").borderRight("1.5em", "grey-400");
logger.text("text").borderRight("2rem", "#FF98B8", "dotted");
```

### `borderY(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderY(10, "blue");
logger.text("text").borderY("1.5em", "grey-400");
logger.text("text").borderY("2rem", "#FF98B8", "dotted");
```

### `borderX(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").borderX(10, "blue");
logger.text("text").borderX("1.5em", "grey-400");
logger.text("text").borderX("2rem", "#FF98B8", "dotted");
```

### `border(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

```js
logger.text("text").border(10, "blue");
logger.text("text").border("1.5em", "grey-400");
logger.text("text").border("2rem", "#FF98B8", "dotted");
```

### `borderRadius(value: CssUnitValue): Logger`

```js
logger.text("text").borderRadius(10);
logger.text("text").borderRadius("1.5em");
logger.text("text").borderRadius("30%");
```

## API - Formats

### `circle(): Logger`

```js
logger.circle().color("red");
```

### `badge(): Logger`

```js
logger.circle().bgColor("blue-100");
```

### `chip(): Logger`

```js
logger.circle().bgColor("orange-600");
```

### `keyValue(key: string, value: any): Logger`

```js
logger.keyValue("key", Math.random());
```
