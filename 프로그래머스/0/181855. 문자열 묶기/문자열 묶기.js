function solution(strArr) {
    const lengthCount = {};

    strArr.forEach(str => {
        const len = str.length;
        if (lengthCount[len]) {
            lengthCount[len]++;
        } else {
            lengthCount[len] = 1;
        }
    });

    const sizes = Object.values(lengthCount);
    const maxGroupSize = Math.max(...sizes);
    
    return maxGroupSize;
}