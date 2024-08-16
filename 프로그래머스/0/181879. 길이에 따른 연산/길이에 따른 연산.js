function solution(num_list) {
    return num_list.reduce((sum, v)=> num_list.length>10? sum+=v:sum*=v,num_list.length>10?0:1);
}