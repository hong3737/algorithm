const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);
const divide = input[0] / input[1];

console.log(divide);
