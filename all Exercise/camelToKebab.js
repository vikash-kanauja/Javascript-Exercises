function camelToKebab(str) {
  let kebabCase = "";

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const nextChar = str.charAt(i + 1);

    // If current character is uppercase and it's not the first character
    if (char !== char.toLowerCase() && i > 0) {
      kebabCase += "-" + char.toLowerCase();
    } else {
      kebabCase += char.toLowerCase();
    }
  }

  return kebabCase;
}

console.log(camelToKebab("camelCase")); // Output: "camel-case"
console.log(camelToKebab("anotherExample")); // Output: "another-example"
console.log(camelToKebab("SomeTextHere")); // Output: "some-text-here"
console.log(camelToKebab("CSSStyleRules")); // Output: "css-style-rules"
