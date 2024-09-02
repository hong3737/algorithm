function solution(order) {
    return order.reduce((s,v)=> s+=v.includes('cafelatte')?5000:4500, 0);
}