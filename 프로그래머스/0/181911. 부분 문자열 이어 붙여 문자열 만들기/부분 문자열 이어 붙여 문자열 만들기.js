function solution(my_strings, parts) {
    let answer = '';
    
    parts.forEach(([a,b], i)=>{
        answer+=my_strings[i].slice(a,b+1);
    });
    
    return answer;
}