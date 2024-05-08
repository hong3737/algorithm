function solution(i, j, k) {
    let result = 0;
    for(let a=i; a<=j; a++){
        String(a).split("").forEach((item) => item.includes(k)? result ++ : result);
    }
    
    return result;
}