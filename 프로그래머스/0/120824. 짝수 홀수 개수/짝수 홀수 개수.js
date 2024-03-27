function solution(num_list) {
    let even = 0;
    let odd = 0;
    const result = [];
    
    num_list.forEach((num) => num % 2 === 0 ? even++ : odd++);
    result.push(even);
    result.push(odd);
    
    return result;
}