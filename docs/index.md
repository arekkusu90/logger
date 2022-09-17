<Title />

## Getting started

Install the logger as a dependency

```bash
$ npm i @arekkusu90/logger
```

Import the logger

```js
import Logger from "@arekkusu90/logger";
```

Use the logger

<Example console>

```js
import Logger from "@arekkusu90/logger";

const logger = new Logger();
logger.text("Blue").style("color: blue").space().text("text").log();
```

</Example>

## Playground

You can have fun with the playground on
[CodeSandbox](https://codesandbox.io/s/arekkusu90-logger-f5rgpn?file=/src/index.ts)

## Examples

<Example console>

```js
// Banner like log
logger
  .text("I'm awesome 😎")
  .bold()
  .size("2rem")
  .textShadow("1px 1px 2px purple, 0 0 6px white, 0 0 3px purple")
  .bgGradient("to right bottom", "green-200", "blue-200")
  .borderLeft(8, "purple-800")
  .borderTop(8, "purple-600")
  .borderRight(8, "purple-400")
  .borderBottom(8, "purple-200")
  .borderRadius(8)
  .p(16)
  .my(16)
  .log();

// Cool log for an HTTP request
logger.text("POST").bold().badge().bgColor("green-100").color("black");
logger
  .space()
  .text("FormData")
  .bold()
  .badge()
  .bgColor("deeppurple-50")
  .color("black");
logger.space().text("https://my-host.dev/users").bold();
logger.space().text("➜").bold();
logger.space().text("201").bold().chip().bgColor("green-100").color("black");
logger
  .space()
  .text("⏱️175ms")
  .bold()
  .chip()
  .bgColor("green-100")
  .color("black");
logger
  .space()
  .text("📦97.5kb")
  .bold()
  .chip()
  .bgColor("deeppurple-100")
  .color("black");
logger
  .space()
  .text("JSON")
  .bold()
  .chip()
  .bgColor("deeppurple-50")
  .color("black");
logger.log();
```

</Example>

## Extend the logger

Do you want a method for a particular style that you often use? <br />
You can do it:

```js
import Logger from "@arekkusu90/logger";

class MyLogger extends Logger {
  myStyle() {
    return this.italic().color("orange-900").borderX(3, "orange-200").px(8);
  }
}

const l = new MyLogger();
l.text("Blue").myStyle().log();
```

If you think the APIs are too verbose, you can extend the logger to add your own shortcuts.<br />
Here is an example:

```js
import Logger from "@arekkusu90/logger";
import type { CssUnitValue, Color } from "@arekkusu90/logger";

class ShortLogger extends Logger {
  t(text: string) {
    return this.text(text);
  }

  c(color: Color) {
    return this.color(color);
  }

  b() {
    return this.bold();
  }

  i() {
    return this.italic();
  }

  bt(width: CssUnitValue, color: Color, type = "solid") {
    return this.borderTop(width, color, type);
  }

  s(count = 1) {
    return this.space(count);
  }
}

const l = new ShortLogger();
l.t("Blue").c("blue").s().t("text").log();
```

Or, maybe, you want to add a prefix to all logs.<br />
Here is another example:

```js
import Logger from "@arekkusu90/logger";

class PrefixLogger extends Logger {
  print() {
    this.text("[My prefix]");
    this.stack.unishift(this.last);
    this.stack.pop();
    return super.print();
  }
}

const l = new PrefixLogger();
l.text("Blue").color("blue").space().text("text").log();
```

## API - Base

### `expr(vlaue: any): Logger`

Add a JS expression to the message to log.

:::warning
Expressions cannot be styled.
:::

<Example console>

```js
logger.expr(Math.random()).log();
```

</Example>

### `text(value: string): Logger`

Add a text to the message to log.
Each `text()` can have his own style.

<Example console>

```js
logger.text("Random text").log();
```

</Example>

### `style(value: string): Logger`

Add styles to a text. <br/>
You can style the whole message, some words of the message or some letters of the word.

<Example console>

```js
logger.text("text").style("font-size: 32px; color: red;").log();
```

</Example>

### `clear(): Logger`

Clear the message. This will remove all the `text()`, `expr()` and `styles()` added.

<Example console>

```js
logger
  .text("not logged")
  .style("font-size: 32px; color: red;")
  .clear()
  .text("text")
  .log();
```

</Example>

### `printDebug(): Logger`

This is a method for debugging purpose. <br>
Print the tokenized message with the substitution list.

:::info
This method use the `console.debug()` to print.
:::

<Example>

```js
logger.text("text").printDebug();
```

</Example>

### `print(method: Function): void`

Print the message using a user defined function and the `clear()` the message.

<Example console>

```js
logger.text("text").print(console.debug);
logger.text("text").print(console.log);
logger.text("text").print(console.info);
logger.text("text").print(console.warn);
logger.text("text").print(console.error);
```

</Example>

## API - Printers

### `log(): void`

Print the message using the `console.log()` function.

<Example console>

```js
logger.text("text").log();
```

</Example>

### `debug(): void`

Print the message using the `console.debug()` function.

<Example console>

```js
logger.text("text").debug();
```

</Example>

### `info(): void`

Print the message using the `console.info()` function.

<Example console>

```js
logger.text("text").info();
```

</Example>

### `warn(): void`

Print the message using the `console.warn()` function.

<Example console>

```js
logger.text("text").warn();
```

</Example>

### `error(): void`

Print the message using the `console.error()` function.

<Example console>

```js
logger.text("text").error();
```

</Example>

### `group(): void`

Print the message using the `console.group()` function.

<Example>

```js
logger.text("text").group();
```

</Example>

### `groupCollapsed(): void`

Print the message using the `console.groupCollapsed()` function.

<Example>

```js
logger.text("text").groupCollapsed();
```

</Example>

### `groupEnd(): void`

Print the message using the `console.groupEnd()` function.

<Example>

```js
logger.text("text").groupEnd();
```

</Example>

## API - Text

### `color(color: Color): Logger`

Change the color of the text.

<Example console>

```js
logger.text("text").color("red-500").log();
logger.text("text").color("white").log();
logger.text("text").color("#F87CD4").log();
logger.text("text").color("rgb(124, 85, 208)").log();
```

</Example>

### `size(size: CssUnitValue): Logger`

Change the size of the text.

<Example console>

```js
logger.text("text").size(32).log();
logger.text("text").size("32px").log();
logger.text("text").size("3em").log();
logger.text("text").size("1.5rem").log();
logger.text("text").size("20%").log();
logger.text("text").size("2vh").log();
```

</Example>

### `bold(): Logger`

Make the text bold.

<Example console>

```js
logger.text("text").bold().log();
```

</Example>

### `italic(): Logger`

Make the text italic.

<Example console>

```js
logger.text("text").italic().log();
```

</Example>

### `underline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line under the text with a style.

<Example console>

```js
logger.text("text").underline().log();
logger.text("text").underline("wave").log();
logger.text("text").underline("solid", "blue-100").log();
logger.text("text").underline("dashed", "yellow").log();
```

</Example>

### `overline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line over the text with a style.

<Example console>

```js
logger.text("text").overline().log();
logger.text("text").overline("wave").log();
logger.text("text").overline("solid", "blue-100").log();
logger.text("text").overline("dashed", "yellow").log();
```

</Example>

### `strikethrough(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line through the text with a style.

<Example console>

```js
logger.text("text").strikethrough().log();
logger.text("text").strikethrough("wave").log();
logger.text("text").strikethrough("solid", "blue-100").log();
logger.text("text").strikethrough("dashed", "yellow").log();
```

</Example>

### `uppercase(): Logger`

Make the text uppercase.

<Example console>

```js
logger.text("text").uppercase().log();
```

</Example>

### `lowercase(): Logger`

Make the text lowercase.

<Example console>

```js
logger.text("text").lowercase().log();
```

</Example>

### `capitalize(): Logger`

Make the first letter uppercase.

<Example console>

```js
logger.text("text").capitalize().log();
```

</Example>

### `textShadow(value: string): Logger`

Add a shadow to the text.

<Example console>

```js
logger
  .text("text")
  .textShadow("1px 1px 2px red, 0 0 6px blue, 0 0 3px blue")
  .log();
```

</Example>

### `emphasis(value: string, type: "filled" | "open" = "filled", color: Color = "currentcolor"): Logger`

Add a colored emphasis to the text.

<Example console>

```js
logger.text("text").emphasis("sesame", "filled", "blue-800").log();
logger.text("text").emphasis("x", "open", "orange").log();
```

</Example>

### `indent(value: CssUnitValue): Logger`

Indent the text.

<Example console>

```js
logger.text("text").indent(32).log();
logger.text("text").indent("32px").log();
logger.text("text").indent("3em").log();
logger.text("text").indent("1.5rem").log();
logger.text("text").indent("20%").log();
logger.text("text").indent("2vh").log();
```

</Example>

### `lineHeight(value: string): Logger`

Set the line height of the text.

<Example console>

```js
logger.text("text").lineHeight(2).log();
logger.text("text").lineHeight("100%").log();
```

</Example>

### `space(count: number = 1): Logger`

Add one or more space to the message.

<Example console>

```js
logger.text("text").space().log();
logger.text("text").space(4).log();
```

</Example>

### `tab(count: number = 1): Logger`

Add one or more tab to the message.

<Example console>

```js
logger.text("text").tab().log();
logger.text("text").tab(4).log();
```

</Example>

### `newLine(count: number = 1): Logger`

Add one or new line space to the message.

<Example console>

```js
logger.text("text").newLine().log();
logger.text("text").newLine(4).log();
```

</Example>

## API - Background

### `bgColor(color: Color): Logger`

change the background of the text.

<Example console>

```js
logger.text("text").bgColor("red-500").log();
logger.text("text").bgColor("white").log();
logger.text("text").bgColor("#F87CD4").log();
logger.text("text").bgColor("rgb(124, 85, 208)").log();
```

</Example>

### `bgGradient(direction: CssGradientLinearDirection, ...colorStopList: CssGradientLinearStop[]): Logger`

Use a gradient background for the text.

<Example console>

```js
logger
  .text("text")
  .bgGradient("to left bottom", "red-300 40%", "yellow-600")
  .log();
```

</Example>

## API - Margin & Padding

### `pt(value: CssUnitValue): Logger`

Add a padding top.

<Example console>

```js
logger.text("text").pt(10).log();
logger.text("text").pt("1.5em").log();
logger.text("text").pt("2rem").log();
```

</Example>

### `pb(value: CssUnitValue): Logger`

Add a padding bottom.

<Example console>

```js
logger.text("text").pb(10).log();
logger.text("text").pb("1.5em").log();
logger.text("text").pb("2rem").log();
```

</Example>

### `pl(value: CssUnitValue): Logger`

Add a padding left.

<Example console>

```js
logger.text("text").pl(10).log();
logger.text("text").pl("1.5em").log();
logger.text("text").pl("2rem").log();
```

</Example>

### `pr(value: CssUnitValue): Logger`

Add a padding right.

<Example console>

```js
logger.text("text").pr(10).log();
logger.text("text").pr("1.5em").log();
logger.text("text").pr("2rem").log();
```

</Example>

### `px(value: CssUnitValue): Logger`

Add a padding left and right.

<Example console>

```js
logger.text("text").px(10).log();
logger.text("text").px("1.5em").log();
logger.text("text").px("2rem").log();
```

</Example>

### `py(value: CssUnitValue): Logger`

Add a padding top and bottom.

<Example console>

```js
logger.text("text").py(10).log();
logger.text("text").py("1.5em").log();
logger.text("text").py("2rem").log();
```

</Example>

### `p(value: CssUnitValue): Logger`

Add a padding left, top, right and bottom.

<Example console>

```js
logger.text("text").p(10).log();
logger.text("text").p("1.5em").log();
logger.text("text").p("2rem").log();
```

</Example>

### `mt(value: CssUnitValue): Logger`

Add a margin top.

<Example console>

```js
logger.text("text").mt(10).log();
logger.text("text").mt("1.5em").log();
logger.text("text").mt("2rem").log();
```

</Example>

### `mb(value: CssUnitValue): Logger`

Add a margin bottom.

<Example console>

```js
logger.text("text").mb(10).log();
logger.text("text").mb("1.5em").log();
logger.text("text").mb("2rem").log();
```

</Example>

### `ml(value: CssUnitValue): Logger`

Add a margin left.

<Example console>

```js
logger.text("text").ml(10).log();
logger.text("text").ml("1.5em").log();
logger.text("text").ml("2rem").log();
```

</Example>

### `mr(value: CssUnitValue): Logger`

Add a margin right.

<Example console>

```js
logger.text("text").mr(10).log();
logger.text("text").mr("1.5em").log();
logger.text("text").mr("2rem").log();
```

</Example>

### `mx(value: CssUnitValue): Logger`

Add a margin left and right.

<Example console>

```js
logger.text("text").mx(10).log();
logger.text("text").mx("1.5em").log();
logger.text("text").mx("2rem").log();
```

</Example>

### `my(value: CssUnitValue): Logger`

Add a margin top and bottom.

<Example console>

```js
logger.text("text").my(10).log();
logger.text("text").my("1.5em").log();
logger.text("text").my("2rem").log();
```

</Example>

### `m(value: CssUnitValue): Logger`

Add a margin left, top, right and bottom.

<Example console>

```js
logger.text("text").m(10).log();
logger.text("text").m("1.5em").log();
logger.text("text").m("2rem").log();
```

</Example>

## API - Borders

### `borderTop(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on top of the text.

<Example console>

```js
logger.text("text").borderTop(10, "blue").log();
logger.text("text").borderTop("1.5em", "grey-400").log();
logger.text("text").borderTop("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderBottom(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on bottom of the text.

<Example console>

```js
logger.text("text").borderBottom(10, "blue").log();
logger.text("text").borderBottom("1.5em", "grey-400").log();
logger.text("text").borderBottom("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderLeft(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left of the text.

<Example console>

```js
logger.text("text").borderLeft(10, "blue").log();
logger.text("text").borderLeft("1.5em", "grey-400").log();
logger.text("text").borderLeft("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderRight(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on right of the text.

<Example console>

```js
logger.text("text").borderRight(10, "blue").log();
logger.text("text").borderRight("1.5em", "grey-400").log();
logger.text("text").borderRight("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderY(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on top and bottom of the text.

<Example console>

```js
logger.text("text").borderY(10, "blue").log();
logger.text("text").borderY("1.5em", "grey-400").log();
logger.text("text").borderY("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderX(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left and right of the text.

<Example console>

```js
logger.text("text").borderX(10, "blue").log();
logger.text("text").borderX("1.5em", "grey-400").log();
logger.text("text").borderX("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `border(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left, top, right and bottom of the text.

<Example console>

```js
logger.text("text").border(10, "blue").log();
logger.text("text").border("1.5em", "grey-400").log();
logger.text("text").border("2rem", "#FF98B8", "dotted").log();
```

</Example>

### `borderRadius(value: CssUnitValue): Logger`

Add a border radius.

<Example console>

```js
logger.text("text").border(1, "blue-300").borderRadius(10).log();
logger.text("text").border(1, "blue-300").borderRadius("1.5em").log();
logger.text("text").border(1, "blue-300").borderRadius("30%").log();
```

</Example>

## API - Formats

### `circle(): Logger`

Add a circle character. <br>
You can style the circle like you style `text()`.

<Example console>

```js
logger.circle().color("red").log();
```

</Example>

### `badge(): Logger`

Format the text like a badge. <br>
Add some padding, border radius and line height.

<Example console>

```js
logger.text("text").badge().bgColor("blue-100").log();
```

</Example>

### `chip(): Logger`

Format the text like a chip. <br>
Add some padding, border radius and line height.

<Example console>

```js
logger.text("text").chip().bgColor("orange-600").log();
```

</Example>

### `keyValue(key: string, value: any): Logger`

Fast format for <key, value> text. <br>

<Example console>

```js
logger.keyValue("key", Math.random()).log();
```

</Example>
