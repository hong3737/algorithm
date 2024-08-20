function solution(arr, queries) {
    var answer = [];
    
    queries.forEach(([s, e, k])=>{
        let calcul = arr.filter((v,i)=> i>=s&&i<=e&&v>k).sort((a,b)=> a-b);
        answer.push(calcul[0]?calcul[0]:-1);
    });
    
    return answer;
}