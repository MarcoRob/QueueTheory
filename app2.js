const Queue = require("bull");

const fibonacciQueue = new Queue("fibonacci");

fibonacciQueue.add({ num: 12 });
