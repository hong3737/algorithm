const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
    const sum = input[i].trim().split(" ").map(Number);
    console.log(sum[0] + sum[1]);
}