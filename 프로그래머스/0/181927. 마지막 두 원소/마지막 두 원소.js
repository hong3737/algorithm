function solution(num_list) {
    const length = num_list.length;
    const num_last = num_list[length-1];
    const num_last2 = num_list[length-2];
    
    num_last > num_last2? num_list.push(num_last - num_last2) : num_list.push(num_last*2);
    
    return num_list;
}