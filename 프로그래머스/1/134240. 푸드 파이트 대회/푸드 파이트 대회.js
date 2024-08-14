function solution(food) {
    let answer=[];
    
    food.forEach((item, i)=>{
        if(i!=0) answer.push(String(i).repeat(Math.floor(item/2)));
    });
    
    return answer.concat([0],[...answer].reverse()).join("");
}