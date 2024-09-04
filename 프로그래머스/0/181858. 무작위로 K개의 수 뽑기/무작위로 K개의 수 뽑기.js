function solution(arr, k) {
    const uniqueArr = Array.from(new Set(arr)); 
    return Array(k).fill(-1).map((_, i) => uniqueArr[i] !== undefined ? uniqueArr[i] : -1);
}