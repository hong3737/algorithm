function solution(binomial) {
    const [a, op, b] = binomial.split(' ');

    const numA = Number(a);
    const numB = Number(b);

    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y
    };

    return operations[op](numA, numB);
}