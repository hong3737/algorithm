function solution(a, b) {
    // 두 문자열의 길이를 맞추기 위해 앞에 0을 채움
    while (a.length < b.length) a = "0" + a;
    while (b.length < a.length) b = "0" + b;

    let carry = 0;
    let result = "";

    // 뒤에서부터 한 자리씩 더하기
    for (let i = a.length - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    // 마지막으로 남은 carry가 있다면 추가
    if (carry > 0) {
        result = carry + result;
    }

    return result;
}