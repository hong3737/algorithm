function solution(my_string) {
   return my_string.split("").map((item) => +item).filter((item) => item >= 0).sort((a,b)=> a-b);
}