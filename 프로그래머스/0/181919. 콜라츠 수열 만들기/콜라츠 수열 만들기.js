function solution(n) {
    const isEven = (num) => num%2===0;
    let answer=[n];
    
    while(n>1){
        n = isEven(n)? n/2 : 3*n+1;
        answer.push(n);
    }
    
    return answer;
}