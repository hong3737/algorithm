function solution(n) {
    let result = [];
    for(i=1; i <= n; i++){
        n%i === 0 ? result.push(i) : result;
    }
    
    return result;
}