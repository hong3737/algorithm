function solution(emergency) {
    let sort = emergency.slice().sort((a,b) => b-a);
    console.log(sort);
    return emergency.map((item) => sort.indexOf(item) + 1);
}