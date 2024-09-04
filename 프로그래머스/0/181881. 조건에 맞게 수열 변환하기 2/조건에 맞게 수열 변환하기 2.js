function solution(arr) {
    let x = 0;

    while (true) {
        const nextArr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 !== 0) return v * 2 + 1;
            return v;
        });

        if (arr.join('') === nextArr.join('')) break;
        
        arr = nextArr;
        x++;
    }

    return x;
}