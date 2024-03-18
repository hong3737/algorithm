function solution(n, k) {
    n / 10 >= 1 ? k = k - Math.floor(n / 10) : k;
    return (n * 12000) + (k * 2000);
}