function solution(array) {
    let answer = 0;
    array.forEach((item) => {
        String(item).split("").forEach((item)=>item === '7'? answer++ : answer)
    });
        
    return answer;
}