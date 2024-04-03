function solution(price) {
    return price >= 500000? parseInt(price - price*0.2) : price >= 300000? parseInt(price - price*0.1) : price >= 100000? parseInt(price - price*0.05) : price;
}