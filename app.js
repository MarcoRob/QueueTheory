"use strict";

const Queue = require("bull");
const processPath = "./process";
const calculateFibo = new Queue("fibonacci", "redis://127.0.0.1:6379");

calculateFibo
  .isReady()
  .then(created => {
    created.process(require(`${processPath}/fibonacci`));
  })
  .catch(err => {
    console.log("ERROR creating process", err);
  });
