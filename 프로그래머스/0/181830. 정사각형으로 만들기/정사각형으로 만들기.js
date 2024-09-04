function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    
    if (rows > cols) {
        return arr.map(row => [...row, ...Array(rows - cols).fill(0)]);
    } else if (cols > rows) {
        const newRow = Array(cols).fill(0);
        return [...arr, ...Array(cols - rows).fill(newRow)];
    }
    
    return arr;
}