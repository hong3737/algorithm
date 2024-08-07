function solution(x) {
    const sum = String(x).split("").reduce((sum, item)=> Number(sum)+Number(item),0);
    return x%sum===0;
}