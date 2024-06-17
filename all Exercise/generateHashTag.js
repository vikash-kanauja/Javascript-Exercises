const generateHash = (str) => {
  if (str.length > 285 || str.trim() === "") {
    return false;
  }
  let ans = str
    .split(" ")
    .map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join("");
  ans = `#${ans}`;

  // let ans = str
  //     .split(" ")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join("");
  //   ans = `#${ans}`;
  //   return ans;
};

const ans = generateHash("back modi");
console.log(ans);
