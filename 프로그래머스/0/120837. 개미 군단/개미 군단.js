function solution(hp) {
    let result = 0;
    let remain = hp;
    
    result += Math.floor(remain/5);
    remain = hp%5; 
    if(remain !=0){
        result = result + Math.floor(remain/3);
        remain = remain%3;
        if(remain != 0){
            result += remain%3;
        }
    }
    
    return result;
}