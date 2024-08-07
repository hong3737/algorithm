function solution(n) {
    return Math.pow(n, 0.5)%1===0?(Math.pow(n, 0.5)+1)**2:-1;
}