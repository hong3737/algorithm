function solution(age) {
    let alpabat = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let result ="";
    for(i=0; i < String(age).split("").length; i++){
        result += alpabat[String(age).split("")[i]];
    }
    return result;
}