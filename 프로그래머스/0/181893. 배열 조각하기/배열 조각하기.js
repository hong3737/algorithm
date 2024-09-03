function solution(arr, query) {
    query.forEach((v,index)=> {
        arr = index%2===0? arr.filter((_,i)=> i<=v) :  arr.filter((_,i)=> i>=v);
    });
    return arr;
}