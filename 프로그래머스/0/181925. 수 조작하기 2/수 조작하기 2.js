function solution(numLog) {
    const input = {
          '1': "w",
         '-1': "s",
         '10': "d",
        '-10': "a",
    };
    
    return numLog.map((v,i)=> input[v>numLog[i+1]? -Math.abs(v-numLog[i+1]) : Math.abs(v-numLog[i+1])]).join("");
    
}