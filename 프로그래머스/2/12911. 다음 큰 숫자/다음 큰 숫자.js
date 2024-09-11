function solution(n) {
    let cnt = n.toString(2).split("").filter((v)=> v!=='0').length;
    
    let nextN = n+1;
    
    while(true){
        if(nextN.toString(2).split("").filter((v)=> v!=='0').length === cnt)
            return nextN;
        nextN++;
    }
}