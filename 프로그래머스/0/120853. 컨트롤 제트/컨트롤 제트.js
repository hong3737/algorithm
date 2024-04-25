function solution(s) {
    let answer = 0;
    const arr = s.split(" ");
    
    arr.forEach((item,index)=> {
        item === 'Z' ? answer -= parseInt(arr[index-1]) : answer += parseInt(item)
    });
    
    return answer;
}