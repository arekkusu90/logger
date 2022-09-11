import type {
  Color,
  CssGradientLinearDirection,
  CssGradientLinearStop,
} from "./types";
import { getColor } from "./utils";
import LoggerBaseText from "./logger-base-text.class";

export default class LoggerBaseTextBackground extends LoggerBaseText {
  bgColor(color: Color) {
    color = getColor(color);
    return this.style(`background-color: ${color}`);
  }

  bgGradient(
    direction: CssGradientLinearDirection,
    ...colorStopList: CssGradientLinearStop[]
  ) {
    colorStopList = colorStopList.map((colorStop) => {
      let parts = colorStop.split(" ");
      let color: Color = parts[0];
      color = getColor(color);
      parts[0] = color;
      return parts.join(" ");
    });

    let stops = colorStopList.join(", ");
    return this.style(
      `background-image: linear-gradient(${direction}, ${stops})`
    );
  }
}
