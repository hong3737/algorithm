function solution(l, r) {
    let answer = [];
    
    for(let i=l; i<=r; i++){
        if(String(i).split("").every((v)=> v==="0"|| v==="5")) answer.push(i);
    }
    
    return answer.length>0?answer:[-1];
}