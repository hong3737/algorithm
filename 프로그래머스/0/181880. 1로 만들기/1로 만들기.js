function solution(num_list) {
    return num_list.reduce((s,v)=> {
        let value = v;
        while(value>1){
            value = value%2===0?value/2 : (value-1)/2;
            s++;
        } 
        return s;
    },0);
}