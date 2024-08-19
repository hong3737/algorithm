function solution(a, b) {
    return String(a).concat(b)>String(b).concat(a)?+String(a).concat(b):+String(b).concat(a);
}