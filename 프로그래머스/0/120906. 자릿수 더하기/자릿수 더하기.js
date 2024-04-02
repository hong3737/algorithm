function solution(n) {
    const arr = String(n).split("");
    let result = 0;
    arr.forEach((item) => {
        result = result + parseInt(item);
    })
    return result;
}