const countChar = (str,char) =>{
    str = str.toLowerCase();
    char = char.toLowerCase();
    const totalCount = str.split("").reduce((accum , currChar) =>{
        if(currChar === char){
            accum++;
        }
        return accum;
    },0);
    return totalCount;
}

console.log(countChar("Missionii In complete" , 'I'));