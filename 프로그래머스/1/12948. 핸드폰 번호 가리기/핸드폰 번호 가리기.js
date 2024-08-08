function solution(phone_number) {
    const num = phone_number.length;
    return phone_number.slice(-4).padStart(num,"*");
}