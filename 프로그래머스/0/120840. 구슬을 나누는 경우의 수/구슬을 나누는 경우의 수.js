function solution(balls, share) {
    let numerator = 1;
    let denominator = 1;     
    let denominator2 = 1;
    
    for(i=balls; i>=1; i--){
        numerator *= i;
    }
    if(share===0 || share ===1){
        share = 1;
    }
    for(i=balls-share; i>=1; i--){
        denominator *= i;
    }
    
    for(i=share; i>=1; i--){
        denominator2 *= i;
    }
    
    return Math.round(numerator/(denominator*denominator2));
}