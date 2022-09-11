import Logger from "../src";

const logger = new Logger();

logger.text("Padding").border("3px", "red-200").p(8).space();
logger.text("Padding Y").border("3px", "red-200").py(8).space();
logger.text("Padding X").border("3px", "red-200").px(8).space();
logger.text("Margin").border("3px", "red-200").m(8).space();
logger.text("Margin Y").border("3px", "red-200").my(8).space();
logger.text("Margin X").border("3px", "red-200").mx(8);
logger.debug();