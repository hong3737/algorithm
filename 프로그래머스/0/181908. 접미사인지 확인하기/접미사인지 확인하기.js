function solution(my_string, is_suffix) {
    let suffixs = [];
    
    for(let i=0; i<my_string.length; i++){
        suffixs.push(my_string.slice(i));
    }
    
    return +suffixs.includes(is_suffix);
}