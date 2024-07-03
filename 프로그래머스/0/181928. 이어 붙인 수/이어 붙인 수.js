function solution(num_list) {
    let odd = "";
    let even = "";
    for(i=0; i<num_list.length; i++){
        num_list[i]%2===0? even+=String(num_list[i]):odd+=String(num_list[i])
    };
    
    return Number(odd) + Number(even);
}