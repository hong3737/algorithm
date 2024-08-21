function solution(arr, queries) {
    let answer = [...arr];
    queries.forEach(([s,e,k]) => answer = answer.map((v,i)=> i>=s&&i<=e&&!(i%k)? v+=1 : v));
    return answer;
}