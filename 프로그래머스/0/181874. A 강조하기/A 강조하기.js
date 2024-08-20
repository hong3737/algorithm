function solution(myString) {
    return myString.split("").map((v)=> v.toUpperCase()==="A"? v.toUpperCase() : v.toLowerCase()).join("");
}