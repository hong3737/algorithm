function solution(q, r, code) {
    return code.split("").reduce((s,v,i)=> i%q===r? s+v : s, "");
}