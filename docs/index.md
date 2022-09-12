# Logger

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

```js
import Logger from "@arekkusu90/logger";

const logger = new Logger();
logger.text("Blue").style("color: blue").space().text("text").log();
```

In the console you should see: <br/>
<span style="color: blue">Blue</span> text

## Playground

You can have fun with the playground on
[CodeSandbox](https://codesandbox.io/s/arekkusu90-logger-f5rgpn?file=/src/index.ts)

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
        return this.space(count)
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

```js
logger.expr(Math.random());
```


### `text(value: string): Logger`

Add a text to the message to log.
Each `text()` can have his own style.

```js
logger.text("Random text");
```

### `style(value: string): Logger`

Add styles to a text. <br/>
You can style the whole message, some words of the message or some letters of the word.

```js
logger.text("text").style("font-size: 32px; color: red;");
```

### `clear(): Logger`

Clear the message. This will remove all the `text()`, `expr()` and `styles()` added.

```js
logger.text("text").style("font-size: 32px; color: red;").clear();
```

### `printDebug(): Logger`

This is a method for debugging purpose. <br>
Print the tokenized message with the substitution list.

:::info
This method use the `console.debug()` to print.
:::

```js
logger.text("text").printDebug();
```

### `print(method: Function): void`

Print the message using a user defined function and the `clear()` the message.

```js
logger.text("text").print(console.log);
logger.text("text").print(console.debug);
logger.text("text").print(console.error);
```

## API - Printers

### `log(): void`

Print the message using the `console.log()` function.

```js
logger.text("text").log();
```

### `debug(): void`

Print the message using the `console.debug()` function.

```js
logger.text("text").debug();
```

### `info(): void`

Print the message using the `console.info()` function.

```js
logger.text("text").info();
```

### `warn(): void`

Print the message using the `console.warn()` function.

```js
logger.text("text").warn();
```

### `error(): void`

Print the message using the `console.error()` function.

```js
logger.text("text").error();
```

### `group(): void`

Print the message using the `console.group()` function.

```js
logger.text("text").group();
```

### `groupCollapsed(): void`

Print the message using the `console.groupCollapsed()` function.

```js
logger.text("text").groupCollapsed();
```

### `groupEnd(): void`

Print the message using the `console.groupEnd()` function.

```js
logger.text("text").groupEnd();
```

## API - Text

### `color(color: Color): Logger`

Change the color of the text.

```js
logger.text("text").color("red-500");
logger.text("text").color("white");
logger.text("text").color("#F87CD4");
logger.text("text").color("rgb(124, 85, 208)");
```

### `size(size: CssUnitValue): Logger`

Change the size of the text.

```js
logger.text("text").size(32);
logger.text("text").size("32px");
logger.text("text").size("3em");
logger.text("text").size("1.5rem");
logger.text("text").size("20%");
logger.text("text").size("2vh");
```

### `bold(): Logger`

Make the text bold.

```js
logger.text("text").bold();
```

### `italic(): Logger`

Make the text italic.

```js
logger.text("text").italic();
```

### `underline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line under the text with a style.

```js
logger.text("text").underline();
logger.text("text").underline("wave");
logger.text("text").underline("solid", "blue-100");
logger.text("text").underline("dashed", "yellow");
```

### `overline(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line over the text with a style.

```js
logger.text("text").overline();
logger.text("text").overline("wave");
logger.text("text").overline("solid", "blue-100");
logger.text("text").overline("dashed", "yellow");
```

### `strikethrough(style: DecorationStyle = "solid", color: Color = "currentcolor"): Logger`

Add a colored line through the text with a style.

```js
logger.text("text").strikethrough();
logger.text("text").strikethrough("wave");
logger.text("text").strikethrough("solid", "blue-100");
logger.text("text").strikethrough("dashed", "yellow");
```

### `uppercase(): Logger`

Make the text uppercase.

```js
logger.text("text").uppercase();
```

### `lowercase(): Logger`

Make the text lowercase.

```js
logger.text("text").lowercase();
```

### `capitalize(): Logger`

Make the first letter uppercase.

```js
logger.text("text").capitalize();
```

### `textShadow(value: string): Logger`

Add a shadow to the text.

```js
logger.text("text").textShadow("1px 1px 2px red, 0 0 6px blue, 0 0 3px blue");
```

### `emphasis(value: string, type: "filled" | "open" = "filled", color: Color = "currentcolor"): Logger`

Add a colored emphasis to the text.

```js
logger.text("text").emphasis("sesame", "filled", "blue-800");
logger.text("text").emphasis("x", "open", "orange");
```

### `indent(value: CssUnitValue): Logger`

Indent the text.

```js
logger.text("text").indent(32);
logger.text("text").indent("32px");
logger.text("text").indent("3em");
logger.text("text").indent("1.5rem");
logger.text("text").indent("20%");
logger.text("text").indent("2vh");
```

### `lineHeight(value: string): Logger`

Set the line height of the text.

```js
logger.text("text").lineHeight(2);
logger.text("text").lineHeight("100%");
```

### `space(count: number = 1): Logger`

Add one or more space to the message.

```js
logger.text("text").space();
logger.text("text").space(4);
```

### `tab(count: number = 1): Logger`

Add one or more tab to the message.

```js
logger.text("text").tab();
logger.text("text").tab(4);
```

### `newLine(count: number = 1): Logger`

Add one or new line space to the message.

```js
logger.text("text").newLine();
logger.text("text").newLine(4);
```

## API - Background

### `bgColor(color: Color): Logger`

change the background of the text.

```js
logger.text("text").color("red-500");
logger.text("text").color("white");
logger.text("text").color("#F87CD4");
logger.text("text").color("rgb(124, 85, 208)");
```

### `bgGradient(direction: CssGradientLinearDirection, ...colorStopList: CssGradientLinearStop[]): Logger`

Use a gradient background for the text.

```js
logger.text("text").bgGradient("to left bottom", "red-300 40%", "yellow-600");
```

## API - Margin & Padding

### `pt(value: CssUnitValue): Logger`

Add a padding top.

```js
logger.text("text").pt(10);
logger.text("text").pt("1.5em");
logger.text("text").pt("2rem");
```

### `pb(value: CssUnitValue): Logger`

Add a padding bottom.

```js
logger.text("text").pb(10);
logger.text("text").pb("1.5em");
logger.text("text").pb("2rem");
```

### `pl(value: CssUnitValue): Logger`

Add a padding left.

```js
logger.text("text").pl(10);
logger.text("text").pl("1.5em");
logger.text("text").pl("2rem");
```

### `pr(value: CssUnitValue): Logger`

Add a padding right.

```js
logger.text("text").pr(10);
logger.text("text").pr("1.5em");
logger.text("text").pr("2rem");
```

### `px(value: CssUnitValue): Logger`

Add a padding left and right.

```js
logger.text("text").px(10);
logger.text("text").px("1.5em");
logger.text("text").px("2rem");
```

### `py(value: CssUnitValue): Logger`

Add a padding top and bottom.

```js
logger.text("text").py(10);
logger.text("text").py("1.5em");
logger.text("text").py("2rem");
```

### `p(value: CssUnitValue): Logger`

Add a padding left, top, right and bottom.

```js
logger.text("text").p(10);
logger.text("text").p("1.5em");
logger.text("text").p("2rem");
```

### `mt(value: CssUnitValue): Logger`

Add a margin top.

```js
logger.text("text").mt(10);
logger.text("text").mt("1.5em");
logger.text("text").mt("2rem");
```

### `mb(value: CssUnitValue): Logger`

Add a margin bottom.

```js
logger.text("text").mb(10);
logger.text("text").mb("1.5em");
logger.text("text").mb("2rem");
```

### `ml(value: CssUnitValue): Logger`

Add a margin left.

```js
logger.text("text").ml(10);
logger.text("text").ml("1.5em");
logger.text("text").ml("2rem");
```

### `mr(value: CssUnitValue): Logger`

Add a margin right.

```js
logger.text("text").mr(10);
logger.text("text").mr("1.5em");
logger.text("text").mr("2rem");
```

### `mx(value: CssUnitValue): Logger`

Add a margin left and right.

```js
logger.text("text").mx(10);
logger.text("text").mx("1.5em");
logger.text("text").mx("2rem");
```

### `my(value: CssUnitValue): Logger`

Add a margin top and bottom.

```js
logger.text("text").my(10);
logger.text("text").my("1.5em");
logger.text("text").my("2rem");
```

### `m(value: CssUnitValue): Logger`

Add a margin left, top, right and bottom.

```js
logger.text("text").m(10);
logger.text("text").m("1.5em");
logger.text("text").m("2rem");
```

## API - Borders

### `borderTop(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on top of the text.

```js
logger.text("text").borderTop(10, "blue");
logger.text("text").borderTop("1.5em", "grey-400");
logger.text("text").borderTop("2rem", "#FF98B8", "dotted");
```

### `borderBottom(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on bottom of the text.

```js
logger.text("text").borderBottom(10, "blue");
logger.text("text").borderBottom("1.5em", "grey-400");
logger.text("text").borderBottom("2rem", "#FF98B8", "dotted");
```

### `borderLeft(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left of the text.

```js
logger.text("text").borderLeft(10, "blue");
logger.text("text").borderLeft("1.5em", "grey-400");
logger.text("text").borderLeft("2rem", "#FF98B8", "dotted");
```

### `borderRight(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on right of the text.

```js
logger.text("text").borderRight(10, "blue");
logger.text("text").borderRight("1.5em", "grey-400");
logger.text("text").borderRight("2rem", "#FF98B8", "dotted");
```

### `borderY(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on top and bottom of the text.

```js
logger.text("text").borderY(10, "blue");
logger.text("text").borderY("1.5em", "grey-400");
logger.text("text").borderY("2rem", "#FF98B8", "dotted");
```

### `borderX(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left and right of the text.

```js
logger.text("text").borderX(10, "blue");
logger.text("text").borderX("1.5em", "grey-400");
logger.text("text").borderX("2rem", "#FF98B8", "dotted");
```

### `border(value: CssUnitValue, color: Color, type: string = "solid"): Logger`

Add a colored border on left, top, right and bottom of the text.

```js
logger.text("text").border(10, "blue");
logger.text("text").border("1.5em", "grey-400");
logger.text("text").border("2rem", "#FF98B8", "dotted");
```

### `borderRadius(value: CssUnitValue): Logger`

Add a border radius.

```js
logger.text("text").borderRadius(10);
logger.text("text").borderRadius("1.5em");
logger.text("text").borderRadius("30%");
```

## API - Formats

### `circle(): Logger`

Add a circle character. <br>
You can style the circle like you style `text()`.

```js
logger.circle().color("red");
```

### `badge(): Logger`

Format the text like a badge. <br>
Add some padding, border radius and line height.

```js
logger.circle().bgColor("blue-100");
```

### `chip(): Logger`

Format the text like a chip. <br>
Add some padding, border radius and line height.

```js
logger.circle().bgColor("orange-600");
```

### `keyValue(key: string, value: any): Logger`

Fast format for <key, value> text. <br>

```js
logger.keyValue("key", Math.random());
```
