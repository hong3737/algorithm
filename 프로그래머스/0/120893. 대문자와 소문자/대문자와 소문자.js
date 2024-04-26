function solution(my_string) {
    let answer = "";
    
    for(let i of my_string){
        i.toUpperCase() === i? answer += i.toLowerCase() : answer += i.toUpperCase();
    }
    
    return answer;
}