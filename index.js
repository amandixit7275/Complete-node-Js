const buff = Buffer.alloc(5); //Size is fixed , it cannot be changed further
const buff1 = Buffer.from("NodeJs"); //for dynamic memeory allocation , however it is still fixed

buff.write("hi");

console.log(buff);

buff1.fill("javascript");
console.log(buff1.toString());

console.log(Buffer.byteLength(buff1));
