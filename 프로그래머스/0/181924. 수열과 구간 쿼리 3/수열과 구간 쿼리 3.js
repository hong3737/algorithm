function solution(arr, queries) {
    let num = 0;
    
    for([i,j] of queries){
        num = arr[i];
        arr[i] = arr[j];
        arr[j] = num;
    }
    
    return arr;
}