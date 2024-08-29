function solution(arr) {
    let length = arr.length;

    let targetLength = 1;
    while (targetLength < length) {
        targetLength *= 2;
    }

    while (arr.length < targetLength) {
        arr.push(0);
    }

    return arr;
}