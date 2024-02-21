const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const one = input[1] % 10;
const ten = Math.floor((input[1] % 100) / 10);
const hund = Math.floor(input[1] / 100);

const a = input[0] * one;
const b = input[0] * ten;
const c = input[0] * hund;
const d = input[0] * input[1];
console.log(`${a}\n${b}\n${c}\n${d}`);
