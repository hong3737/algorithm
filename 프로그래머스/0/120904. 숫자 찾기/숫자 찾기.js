function solution(num, k) {
    const index = String(num).split("").findIndex((item) => item === String(k));
    return  index !== -1? index + 1 : index;
}