function solution(t, p) {
    let answer = 0;
    const index = p.length-1;

    for(let i in t){
        if(t[+i+index]){
            let compare ="";
            for(let j=i; j<=+i+index; j++){
                compare += t[j];
            }
            if(compare<=p) answer++;
        }
    }
    return answer;
}