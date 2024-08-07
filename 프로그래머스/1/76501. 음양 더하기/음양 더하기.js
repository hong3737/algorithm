function solution(absolutes, signs) {
    let num ="";
    for(let i in absolutes){
        num += signs[i]? "+" : "-" ;
        num += absolutes[i];
    }
    return eval(num);
}