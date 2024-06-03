// const { add, subtract, multiply, divide } = require("./calci.js");

// console.log(add(4, 5));
// console.log(subtract(4, 5));
// console.log(multiply(4, 5));
// console.log(divide(4, 5));

// console.log(process.argv);

// console.log("Hello " + process.argv[2]);

process.on("beforeExit", () => {
  console.log("Before Exit Fired!");
});

console.log("Process Started");
