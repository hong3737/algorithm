function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=n; i++){
        let measure = 1;
        for(let j=1; j<=i/2; j++){
            if(i%j === 0) measure++
        }
        if(measure >= 3) answer++
    }
    
    return answer;
}