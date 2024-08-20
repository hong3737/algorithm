function solution(arr, idx) {
    return arr.map((v,i)=>+(i>=idx&&v===1)).indexOf(1);
}