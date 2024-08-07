function solution(num) {
    let level=0;
    while(num!=1){
        level++;
        if(level > 500) return -1;
        
        num = num%2===0? num/2 : num*3+1;
        
    }
    return level;
}