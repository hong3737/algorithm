function solution(array, n) {
    let number = 0;
    array.forEach((item)=> item === n ? number++ : number )
    return number;
}