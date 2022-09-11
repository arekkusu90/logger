import Logger from "../src";

const logger = new Logger();

logger.text("[Text]");
logger.space(2).text("[After 2 space]");
logger.tab(3).text("[After 3 tab]");
logger.newLine().text("After 1 new line");
logger.debug();
