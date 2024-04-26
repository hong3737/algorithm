function solution(array, n) {
    let minus = [];
    array.forEach((item)=> minus.push(Math.abs(item - n)));
    
    let comfirm = [];
    minus.forEach((item,index)=> item === Math.min(...minus)? comfirm.push(index) : comfirm);
    
    if(comfirm.length >= 2){
        let smaller = [];
        comfirm.forEach((item)=> smaller.push(array[item]));
        return Math.min(...smaller);
    }
    
    return array[minus.indexOf(Math.min(...minus))];
    
}