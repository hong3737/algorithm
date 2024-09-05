function solution(rank, attendance) {
    let student = rank.map((v,i)=> ({"rank": v, "index": i})).filter((_,i)=> attendance[i]).sort((a,b)=> a.rank - b.rank);
    
    const [a,b,c] = student.slice(0,3).map((v)=> v.index);
    
    return 10000 * a + 100 * b + c;
}