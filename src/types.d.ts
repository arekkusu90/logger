import type {Logger} from "./logger";

export type GConstructor<T = {}> = new (...args: any[]) => T;
export type LoggerConstructor = GConstructor<Logger>;
export type LoggerStackItem = { type: string; value: any; styles: string[] };

// prettier-ignore
export type ColorName =  "red-50" | "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" | "red-a100" | "red-a200" | "red-a400" | "red-a700" | "pink-50" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900" | "pink-a100" | "pink-a200" | "pink-a400" | "pink-a700" | "purple-50" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" | "purple-a100" | "purple-a200" | "purple-a400" | "purple-a700" | "deeppurple-50" | "deeppurple-100" | "deeppurple-200" | "deeppurple-300" | "deeppurple-400" | "deeppurple-500" | "deeppurple-600" | "deeppurple-700" | "deeppurple-800" | "deeppurple-900" | "deeppurple-a100" | "deeppurple-a200" | "deeppurple-a400" | "deeppurple-a700" | "indigo-50" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" | "indigo-a100" | "indigo-a200" | "indigo-a400" | "indigo-a700" | "blue-50" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" | "blue-a100" | "blue-a200" | "blue-a400" | "blue-a700" | "lightblue-50" | "lightblue-100" | "lightblue-200" | "lightblue-300" | "lightblue-400" | "lightblue-500" | "lightblue-600" | "lightblue-700" | "lightblue-800" | "lightblue-900" | "lightblue-a100" | "lightblue-a200" | "lightblue-a400" | "lightblue-a700" | "cyan-50" | "cyan-100" | "cyan-200" | "cyan-300" | "cyan-400" | "cyan-500" | "cyan-600" | "cyan-700" | "cyan-800" | "cyan-900" | "cyan-a100" | "cyan-a200" | "cyan-a400" | "cyan-a700" | "teal-50" | "teal-100" | "teal-200" | "teal-300" | "teal-400" | "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" | "teal-a100" | "teal-a200" | "teal-a400" | "teal-a700" | "green-50" | "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | "green-a100" | "green-a200" | "green-a400" | "green-a700" | "lightgreen-50" | "lightgreen-100" | "lightgreen-200" | "lightgreen-300" | "lightgreen-400" | "lightgreen-500" | "lightgreen-600" | "lightgreen-700" | "lightgreen-800" | "lightgreen-900" | "lightgreen-a100" | "lightgreen-a200" | "lightgreen-a400" | "lightgreen-a700" | "lime-50" | "lime-100" | "lime-200" | "lime-300" | "lime-400" | "lime-500" | "lime-600" | "lime-700" | "lime-800" | "lime-900" | "lime-a100" | "lime-a200" | "lime-a400" | "lime-a700" | "yellow-50" | "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | "yellow-a100" | "yellow-a200" | "yellow-a400" | "yellow-a700" | "amber-50" | "amber-100" | "amber-200" | "amber-300" | "amber-400" | "amber-500" | "amber-600" | "amber-700" | "amber-800" | "amber-900" | "amber-a100" | "amber-a200" | "amber-a400" | "amber-a700" | "orange-50" | "orange-100" | "orange-200" | "orange-300" | "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" | "orange-a100" | "orange-a200" | "orange-a400" | "orange-a700" | "deeporange-50" | "deeporange-100" | "deeporange-200" | "deeporange-300" | "deeporange-400" | "deeporange-500" | "deeporange-600" | "deeporange-700" | "deeporange-800" | "deeporange-900" | "deeporange-a100" | "deeporange-a200" | "deeporange-a400" | "deeporange-a700" | "brown-50" | "brown-100" | "brown-200" | "brown-300" | "brown-400" | "brown-500" | "brown-600" | "brown-700" | "brown-800" | "brown-900" | "grey-50" | "grey-100" | "grey-200" | "grey-300" | "grey-400" | "grey-500" | "grey-600" | "grey-700" | "grey-800" | "grey-900" | "bluegrey-50" | "bluegrey-100" | "bluegrey-200" | "bluegrey-300" | "bluegrey-400" | "bluegrey-500" | "bluegrey-600" | "bluegrey-700" | "bluegrey-800" | "bluegrey-900";
export type Color = ColorName | string;
export type DecorationStyle = "solid" | "dotted" | "dashed" | "double" | "wavy";
export type CssUnitAbsolute = "px" | "cm" | "mm" | "Q" | "in" | "pc" | "pt";
export type CssUnitRelativeFont = "ch" | "em" | "ex" | "ic" | "rem";
export type CssUnitRelativeViewport = "vh" | "vw" | "vmax" | "vmin" | "vb" | "vi";
export type CssUnitPercentage = "%";
export type CssUnit =
    | CssUnitAbsolute
    | CssUnitPercentage
    | CssUnitRelativeFont
    | CssUnitRelativeViewport;
export type CssUnitValue = number | `${number}${CssUnit}`;
export type CssUnitAngle = "deg" | "grad" | "rad" | "turn";
export type CssUnitAngleValue = number | `${number}${CssUnitAngle}`;
export type CssGradientLinearDirection =
    | CssUnitAngleValue
    | "to top"
    | "to bottom"
    | "to left"
    | "to right"
    | "to left top"
    | "to left bottom"
    | "to right top"
    | "to right bottom";
export type CssGradientLinearStop =
    | Color
    | `${Color} ${CssUnitValue}`
    | `${Color} ${CssUnitValue} ${CssUnitValue}`;