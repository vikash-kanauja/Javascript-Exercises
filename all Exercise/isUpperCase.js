const isUpperCase =(ch)=>{
    if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
        return true;
    }
    return false;
    // or 
    // return ch === ch.toUpperCase();
}
console.log(isUpperCase("s"));
console.log(isUpperCase("S"));
