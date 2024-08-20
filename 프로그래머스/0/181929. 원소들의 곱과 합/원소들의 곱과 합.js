function solution(num_list) {
    const multiply = num_list.reduce((s,v)=> s*v, 1);
    const sumPow = num_list.reduce((s,v)=> s+v, 0);
    
    return +(multiply<Math.pow(sumPow,2));
}