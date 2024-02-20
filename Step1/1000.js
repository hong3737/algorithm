const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ");
const sum = +input[0] + +input[1];

console.log(sum);
