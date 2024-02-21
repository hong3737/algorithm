const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);
const multiply = input[0] * input[1];

console.log(multiply);
