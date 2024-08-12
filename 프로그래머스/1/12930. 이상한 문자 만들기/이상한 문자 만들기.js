function solution(s) {
    let answer = [];
    s.split(" ").forEach((item)=>{
        let string ="";
        for(let i in item){
          string+= i%2===0||i===0? item[i].toUpperCase() : item[i].toLowerCase();
        }  
        answer.push(string);
    })
    return answer.join(" ");
}