function solution(a, d, included) {
    let arr = Array.from({length: included.length},(v, i) => included[i]? a + i * d : 0);
    return arr.reduce((s,v)=> s+v,0);
}