function solution(arr) {
    let result = [];
    
    arr.forEach((item) => {
        let n = 0;
        
        while(n < item){
            result.push(item);
            n++;
        }
    });
    
    return result;
    
}