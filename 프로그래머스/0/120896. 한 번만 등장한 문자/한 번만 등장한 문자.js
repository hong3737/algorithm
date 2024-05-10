function solution(s) {
    let set = new Set();
    let twice = new Set();
    s.split("").forEach((item) => {
        set.has(item) ? set.delete(item) && twice.add(item): set.add(item);
    });
    
    return [...set].filter((item) => !twice.has(item)).sort().join("");
}