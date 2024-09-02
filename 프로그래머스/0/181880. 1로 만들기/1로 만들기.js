function solution(num_list) {
    return num_list.reduce((s, v)=> {
        while(v>1){
            v = v%2===0?v/2 : (v-1)/2;
            s++;
        } 
        return s;
    },0);
}