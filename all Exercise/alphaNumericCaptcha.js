// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// a b c d e f g h i j k l m n o p q r s t u v w x y z

function generateRandom() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let strLength = 7;
  let result = "";
  for (let i = 0; i < strLength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);
    result += chars.substring(randNum, randNum + 1);
  }
  return result;
}

console.log(generateRandom());