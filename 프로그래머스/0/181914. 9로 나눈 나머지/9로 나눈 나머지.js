function solution(number) {
    const sum = number.split('').reduce((s, v) => s + Number(v), 0);
    return sum % 9;
}