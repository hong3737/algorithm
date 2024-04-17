function solution(rsp) {
    let result ="";
    const rsp_arr = rsp.split("");
    
    for(const item of rsp_arr){
        result += item==="2"? 0:item==="0"?5:item==="5"?2:undefined;
    }
    return result;
}