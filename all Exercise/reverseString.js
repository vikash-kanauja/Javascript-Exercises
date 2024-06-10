const reverse = (str) =>{
    str = str.split("")
    for(let i=0;i<str.length/2;i++){
        let temp = str[i];
        str[i]=str[str.length - i-1]
        str[str.length - i-1] = temp;
    }
    return str.join("");

}

console.log(reverse("Sonam"));
console.log(reverse("Sohan"));
console.log(reverse("Mohan"));
