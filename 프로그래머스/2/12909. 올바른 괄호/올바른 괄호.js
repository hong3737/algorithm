function solution(s){
    let check = 0;
    
    for(let item of s){
        check += item === "("? 1 : -1;
        if(check < 0) {break;}
    }

    return check===0?true:false;
}