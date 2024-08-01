function solution(A,B){
    const sortA = A.sort((a,b)=> b-a);
    const sortB = B.sort((a,b)=> a-b);
    let sum=0;
    
    for(let i in sortA){
        sum += sortA[i]*sortB[i];
    }
    
    return sum;
}