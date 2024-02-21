const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);

const sum = input[0] + input[1];
const minus = input[0] - input[1];
const multiply = input[0] * input[1];
const quotient = Math.floor(input[0] / input[1]);
const remain = input[0] % input[1];

console.log(`${sum}\n${minus}\n${multiply}\n${quotient}\n${remain}`);
