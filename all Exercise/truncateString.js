const truncateString = (str, count) => {
  if (count <= 0) {
    return str;
  } else if (str.lenght > count) {
    return str.slice(0, count);
  }
};

console.log(truncateString("A tisket a tasket A green and yellow basket", 10));
