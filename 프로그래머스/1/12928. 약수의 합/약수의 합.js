function solution(n) {
    let num = Array.from(new Set());
    
    for(i=1; i<=n; i++){
        n%i === 0? num.push(i) : num;
    }
    
    return num.reduce((a, b) => (a+b),0);
}