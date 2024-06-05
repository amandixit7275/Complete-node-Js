// const { add, subtract, multiply, divide } = require("./calci.js");

// console.log(process.argv);

// console.log("Hello " + process.argv[2]);

process.on("beforeExit", () => {
  console.log("Before Exit Fired!");
});

console.log("Process Started");

process.on("exit", () => {
  console.log("Exited the event");
});
