function solution(arr, intervals) {
    let answer = [];
    
    for([i,j] of intervals){
        answer = answer.concat(arr.slice(i,j+1));
    }
    
    return answer;
}