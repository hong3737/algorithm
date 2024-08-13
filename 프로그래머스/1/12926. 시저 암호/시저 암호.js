function solution(s, n) {
    const  alpabat = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let answer="";
    
    s.split("").forEach((item)=>{
        let index = alpabat.indexOf(item.toLowerCase());
        if(index<0){
            answer+=item;
        }else{
            index = index+n>alpabat.length-1? index+n-alpabat.length : index+n;
            answer+= item===item.toUpperCase()? alpabat[index].toUpperCase() : alpabat[index];
        }
    });
    
    return answer;
}