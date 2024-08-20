function solution(num_list) {
    const odd_sum = num_list.filter((v,i) => (i+1)%2).reduce((s,c)=>s+c,0);
    const even_sum = num_list.filter((v,i) => (i+1)%2===0).reduce((s,c)=>s+c,0);
    
    return Math.max(odd_sum,even_sum);
}