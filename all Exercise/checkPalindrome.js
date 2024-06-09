
const isPalindrome = (str) =>{
    str = str.toLowerCase().replace(/\W/g, "");
    reverse_str = str.split("").reverse().join("")
    return reverse_str === str;

}
console.log(isPalindrome("rewqqwer"))
console.log(isPalindrome("A man, a place, a canal"))


//Note 
// .replace (/\W/g, "") uses the replace() method with a regular expression (/\W/g) to remove all non-word
// character from the string
// \W matches any non-word character (equivalent to [^a-zA-Z0-9_]).
// The g flag performs a global search, mening it replaces
// all occurrences of non-word characters in the String. 
// So, replace(/\W/g,"") replaces all non-word characters with an empty string, effectively removing them from the string
