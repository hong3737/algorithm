function solution(picture, k) {
    return picture.map(item => {
        const enlargedRow = item.split("").map(v => v.repeat(k)).join("");
        return Array(k).fill(enlargedRow);
    }).flat();
}