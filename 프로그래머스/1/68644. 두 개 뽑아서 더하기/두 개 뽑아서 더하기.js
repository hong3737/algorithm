function solution(numbers) {
    let answer = new Set();

    numbers.forEach((num1, i) => {
        numbers.forEach((num2, j) => {
            if (i !== j) {
                answer.add(num1 + num2);
            }
        });
    });

    return Array.from(answer).sort((a,b)=>a-b);
}