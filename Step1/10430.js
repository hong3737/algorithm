const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(" ").map(Number);
a = input[0];
b = input[1];
c = input[2];

console.log(
    `${(a + b) % c}\n${((a % c) + (b % c)) % c}\n${(a * b) % c}\n${
        ((a % c) * (b % c)) % c
    }`
);
