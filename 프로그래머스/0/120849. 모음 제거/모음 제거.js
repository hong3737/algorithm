function solution(my_string) {
    return my_string.split("").filter((item) => !['a', 'e', 'i', 'o', 'u'].includes(item)).join().replaceAll(",","");
}