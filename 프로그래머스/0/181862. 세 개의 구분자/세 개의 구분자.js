function solution(myStr) {
    let result = myStr.split(/[abc]/).filter(str => str !== "");

    return result.length ? result : ["EMPTY"];
}