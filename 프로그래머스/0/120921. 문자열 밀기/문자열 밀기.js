function solution(A, B) {
    let answer = 0;
    const arrA = A.split("");
    
    if(A===B) return answer;
    for(let i=0; i<arrA.length; i++){
        arrA.unshift(arrA.pop());
        answer++;
        if(arrA.join("")===B) return answer;
    }
    
    return answer === arrA.length ? -1 : answer;
}