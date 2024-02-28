const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const all = Number(input[0]);
let each = 0;

for (let i = 2; i <= Number(input[1]) + 1; i++) {
    const goods = input[i].trim().split(" ").map(Number);
    each += goods[0] * goods[1];
}

if (each === all) {
    console.log("Yes");
} else {
    console.log("No");
}