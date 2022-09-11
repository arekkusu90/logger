import Logger from "../src";

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris diam, sodales lacinia neque at, commodo hendrerit velit. In lacinia luctus lacus, sit amet ultricies justo. Maecenas ante massa, pellentesque quis ultrices congue, placerat quis turpis. Sed mauris dui, suscipit nec finibus eu, semper et lacus. Suspendisse sed tellus nec purus cursus egestas. Nullam et efficitur velit, eu facilisis nunc. Aliquam eget ultricies lorem, vitae tempor ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis diam sed tortor pellentesque interdum. Mauris sollicitudin commodo feugiat.`;

const logger = new Logger();

logger.text("normal").tab();
logger.text("bold").bold().newLine(2);
logger.text("underline").underline().tab();
logger.text("overline").overline().tab();
logger.text("strikethrough").strikethrough().tab();
logger.text("underline fancy").underline("wavy", "green-500").tab();
logger.text("Emphasis").emphasis("sesame", "filled", "blue-800").newLine(2);
logger.text("uppercase").uppercase().tab();
logger.text("LOWERCASE").lowercase().tab();
logger.text("capitalize").capitalize().newLine(2);
logger.text("green").color("green-600").tab();
logger.text("bg purple").bgColor("purple-50").tab();
logger.text("white bg amber").bgColor("amber-900").color("#FFFFFF").tab();
logger
  .text("bg gradient")
  .bgGradient("to left bottom", "red-300 40%", "yellow-600")
  .tab();
logger
  .text("text shadow")
  .textShadow("1px 1px 2px red, 0 0 6px blue, 0 0 3px blue")
  .color("transparent")
  .newLine(2);
logger.text("size").size(32).newLine(2);
logger
  .text("Line height 2 with indent")
  .newLine()
  .text(loremIpsum)
  .lineHeight(2)
  .indent(50);
logger.debug();
