function solution(arr, divisor) {
    const filter_arr = arr.filter((item)=> item%divisor===0).sort((a,b)=> a-b);
    
    return filter_arr.length!=0?filter_arr:[-1];
}