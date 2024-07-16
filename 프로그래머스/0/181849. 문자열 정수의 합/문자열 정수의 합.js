function solution(num_str) {
    let sum = 0;
    num_str.split("").forEach((item)=> sum += +item);
    
    return sum;
}