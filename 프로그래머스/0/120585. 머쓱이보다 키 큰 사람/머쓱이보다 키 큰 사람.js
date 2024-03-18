function solution(array, height) {
    let person = 0;
    array.forEach((item)=> item > height? person++ : person);
    return person;
}