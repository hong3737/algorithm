function solution(sizes) {
    let w = 0;
    let h = 0;
    
    sizes.forEach((item)=>{
        if(item[0]<item[1]){
            if(w<item[1]) w=item[1];
            if(h<item[0]) h=item[0];
        } else{
            if(w<item[0]) w=item[0];
            if(h<item[1]) h=item[1];
        }
    })
    
    return w*h;
}