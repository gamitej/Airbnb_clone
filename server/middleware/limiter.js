const rateLimit = require("express-rate-limit");

const MESSAGE = "Too many requests, please try again later.";

const createLimiter = (windowMs, max, message) => {
  return rateLimit({
    windowMs,
    max,
    message: { message: message },
  });
};

const configLimiter = createLimiter(60 * 60 * 1000, 3500, MESSAGE);
const logLimiter = createLimiter(60 * 60 * 1000, 3500, MESSAGE);

module.exports = { configLimiter, logLimiter };
