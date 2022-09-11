import Logger from "../src";

const logger = new Logger();

logger.expr(undefined);
logger.space().expr(null);
logger.space().expr("");
logger.space().expr(true);
logger.space().expr(1);
logger.space().expr(Math.random());
logger.space().expr(Math.PI);
logger.space().expr([]);
logger.space().expr(Array(5).fill("same"));
logger.space().expr({});
logger.space().expr({ a: undefined, b: null, c: "", d: true });
logger.space().expr(NaN);
logger.space().expr((x: number, y: any) => {
  let z = x + y;
  z = z - x;
  z = z - y;
  return z;
});
logger.space().expr(function fn(a: string, b: string) {
  return b + a;
});
logger.space().expr(Logger);
logger.space().expr(logger);
logger.debug();
