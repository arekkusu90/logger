import Logger from "../src";

const logger = new Logger();

logger.text("Border").border("3px", "red-200").tab();
logger.text("Border X").borderX("3px", "red-200").tab();
logger.text("Border Y").borderY("3px", "red-200").tab();
logger.text("Border Radius").border("3px", "red-200").borderRadius(4);
logger.debug();
