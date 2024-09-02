function solution(my_string) {
    const result = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const charCode = my_string.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            // 대문자 A-Z: 아스키 코드 65~90
            result[charCode - 65]++;
        } else if (charCode >= 97 && charCode <= 122) {
            // 소문자 a-z: 아스키 코드 97~122
            result[charCode - 71]++;
        }
    }

    return result;
}