const findLongestWord = (str)=>{
    if(str.trim().length === 0){
        return false;
    }
    const arrayOfWord =  str.split(" ");
    const ans = arrayOfWord.sort((a,b)=>a.length-b.length);
    return ans.at(-1);

    // OR 
    // return arrayOfWord.reduce((accum , currentWord) => (currentWord.length > accum.length ? currentWord : accum),"")
}
console.log(
    findLongestWord("There is no way I am goingg to do it")
)