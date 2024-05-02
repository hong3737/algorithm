function solution(my_string) {
    const splitNums = my_string.split(" ");
    let result = Number(splitNums[0]);
    
    for(let i = 1; i < splitNums.length; i += 2){
        splitNums[i] === '+'? result += Number(splitNums[i+1]) : result -= Number(splitNums[i+1]);
    }
    
    return result;
}