function solution(myString) {
    const change = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
    let answer ="";
    
    myString.split("").forEach((item) => change.indexOf(item) < 0? answer+=item : answer+="l");
    
    return answer;
}