function solution(arr) {
    return arr.every((row, i) => row.every((value, j) => value === arr[j][i])) ? 1 : 0;
}