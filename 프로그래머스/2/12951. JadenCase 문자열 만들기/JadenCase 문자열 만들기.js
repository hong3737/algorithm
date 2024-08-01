function solution(s) {
    let jadenCase = [];
    const sSplit = s.split(" ");
    
    sSplit.forEach((word,idx)=>{
        for(let i in word){
            jadenCase += i==0 ? word[i].toUpperCase() : word[i].toLowerCase();    
        }
        if(idx != sSplit.length-1) jadenCase += " "
    })
    
    return jadenCase;
}