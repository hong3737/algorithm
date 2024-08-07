function solution(my_string, alp) {
    let upper_alp = "";
    my_string.split("").forEach((item)=> upper_alp += item===alp? item.toUpperCase() : item);
    return upper_alp;
}