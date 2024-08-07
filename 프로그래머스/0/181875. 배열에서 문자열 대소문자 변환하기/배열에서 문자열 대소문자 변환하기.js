function solution(strArr) {
    let chg_str = [];
    
    for(let i in strArr){
        chg_str.push( i%2 === 0? strArr[i].toLowerCase() : strArr[i].toUpperCase() );
    }
    
    return chg_str;
}