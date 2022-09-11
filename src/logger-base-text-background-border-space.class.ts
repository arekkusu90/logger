import type {CssUnitValue} from "./types";
import {isNumber} from "./utils";
import LoggerBaseTextBackgroundBorder from "./logger-base-text-background-border.class";

export default class LoggerBaseTextBackgroundBorderSpace extends LoggerBaseTextBackgroundBorder {
    pt(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`padding-top: ${value}`);
    }

    pb(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`padding-bottom: ${value}`);
    }

    pl(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`padding-left: ${value}`);
    }

    pr(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`padding-right: ${value}`);
    }

    px(value: CssUnitValue) {
        return this.pl(value).pr(value);
    }

    py(value: CssUnitValue) {
        return this.pt(value).pb(value);
    }

    p(value: CssUnitValue) {
        return this.py(value).px(value);
    }

    mt(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`margin-top: ${value}`);
    }

    mb(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`margin-bottom: ${value}`);
    }

    ml(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`margin-left: ${value}`);
    }

    mr(value: CssUnitValue) {
        if (isNumber(value)) value += "px";
        return this.style(`margin-right: ${value}`);
    }

    mx(value: CssUnitValue) {
        return this.ml(value).mr(value);
    }

    my(value: CssUnitValue) {
        return this.mt(value).mb(value);
    }

    m(value: CssUnitValue) {
        return this.my(value).mx(value);
    }
};