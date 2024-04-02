function solution(chicken) {
    let result = 0
    let coupon = chicken
    
    while (coupon >= 10) {
        result += Math.floor(coupon/10)
        coupon = Math.floor(coupon/10) + coupon % 10 
    }
    
    return result
}