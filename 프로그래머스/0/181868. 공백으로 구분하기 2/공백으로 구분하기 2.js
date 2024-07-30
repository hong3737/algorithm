function solution(my_string) {
    return my_string.split(" ").reduce((acc, cur) => {
        cur===""?acc:acc.push(cur);
        return acc;
    }, []);
    
}