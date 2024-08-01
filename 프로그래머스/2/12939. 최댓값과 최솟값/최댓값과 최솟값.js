function solution(s) {
    let min=s.split(" ")[0];
    let max=s.split(" ")[0];
    
    s.split(" ").forEach((item)=>{
        Number(item) < min? min=Number(item) : Number(item) > max ? max = Number(item) : item;
    });
    
    return `${min} ${max}`
}