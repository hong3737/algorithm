const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);
const minus = input[0] - input[1];

console.log(minus);
