function solution(my_string, indices) {
    return my_string.split("").filter((v,i)=> indices.indexOf(i)<0).join("");
}