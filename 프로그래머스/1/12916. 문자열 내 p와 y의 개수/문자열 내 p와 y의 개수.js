function solution(s){
    let yLen = 0; 
    let pLen = 0;

    s.split("").forEach((item)=>{
        item.toLowerCase() === 'y'? yLen++ : item.toLowerCase() === 'p'? pLen++ : item;
    });

    console.log(yLen, pLen);
    
    return yLen===pLen?true:false;
}