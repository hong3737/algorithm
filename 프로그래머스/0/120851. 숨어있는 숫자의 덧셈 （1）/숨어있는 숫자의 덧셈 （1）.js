function solution(my_string) {
    return my_string
    .split("")
    .filter((string) => !isNaN(string))
    .map((num) => parseInt(num))
    .reduce((sum, item) => {
        return sum + item;
    }, 0);
}