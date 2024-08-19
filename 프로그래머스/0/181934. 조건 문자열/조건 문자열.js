function solution(ineq, eq, n, m) {
    const isEq = eq ==='=' && n===m? 1 : 0;
    const isIneq = ineq === "<" && n<m ? 1 : ineq === ">" && n>m ? 1 :0;
    
    return isEq || isIneq;
}