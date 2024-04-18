function solution(numbers, k) {
    let index = 0;
    for(i=1; i<k; i++){
        index = i*2 >= numbers.length? i*2 % numbers.length : i*2;
    }
    return numbers[index];
}