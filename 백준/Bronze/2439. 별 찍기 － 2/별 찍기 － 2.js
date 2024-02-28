const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

for (i = 1; i <= +input; i++)
    console.log(" ".repeat(+input - i) + "*".repeat(i));