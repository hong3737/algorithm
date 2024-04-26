function solution(order) {
    let answer = 0;
    String(order).split("").forEach((item)=> {
        if(item === '3' || item === '6' || item === '9') answer++
    });
    return answer;
}