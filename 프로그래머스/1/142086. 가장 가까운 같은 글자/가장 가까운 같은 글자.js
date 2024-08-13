function solution(s) {
    let answer = [];
    let arr = [];
    
    s.split("").forEach((item)=> {
        if(arr.indexOf(item)<0){
            answer.push(arr.indexOf(item)); 
        }else{
            answer.push(arr.length - arr.lastIndexOf(item)); 
        }
        arr.push(item);
    });
    
    return answer;
}