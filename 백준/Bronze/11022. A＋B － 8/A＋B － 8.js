const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let result = "";

for (let i = 1; i <= +input[0]; i++) {
    let sum = typeof input[i] === "string" ? input[i].trim().split(" ") : " ";
    result += `Case #${i}: ${+sum[0]} + ${+sum[1]} = ${+sum[0] + +sum[1]}\n`;
}

console.log(result);