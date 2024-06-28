function stringCompression(str){
    let count=1;
    let com =""
    for(let i=0 ;i<str.length ;i++){
        if(str[i]===str[i+1]){
            count++;
        }
        else{
            com += str[i]+count;
            count=1;
        }
    }
    return com

}

console.log(stringCompression("aabddbbbbsee"));