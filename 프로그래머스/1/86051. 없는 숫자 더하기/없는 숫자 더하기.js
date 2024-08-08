function solution(numbers) {
    let sum = 0;
    const sort_numbers = numbers.sort((a,b)=> a-b);
    
    for(let i=0; i<=9; i++){
        sort_numbers.indexOf(i) < 0 ? sum+=i : i;
    }
    
    return sum;
}