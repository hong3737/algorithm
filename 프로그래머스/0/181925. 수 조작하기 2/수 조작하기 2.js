function solution(numLog) {
    const input = {
          '1': "w",
         '-1': "s",
         '10': "d",
        '-10': "a",
    };
    
    return numLog.slice(1).map((v,i)=> input[v-numLog[i]]).join("");
}