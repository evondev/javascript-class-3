// "I want to learn javascript" -> "I Want To Learn Javascsript"
function sumOf2Numbers(num1 = 1, num2 = 2) {
  const total = num1 + num2;
  console.log("sumOf2Numbers ~ total:", total);
  return total;
}
const results = sumOf2Numbers(5, 10);
console.log("results:", results);
// ["I", "want", "to", "learn", "javascsript"]
function capitalizeStr(str) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  });
  return capitalizedWords.join(" ");
}
const capitalizedStr = capitalizeStr(
  "My name is evondev. And I am a developer"
);
console.log("capitalizedStr:", capitalizedStr);
const myStr = "I want to learn javascript";
// function expression
// const total = function (num1, num2) {
//   return num1 + num2;
// };
// function declaration
function total(num1, num2) {
  return num1 + num2;
}
console.log(total(1, 2));
const calculateAge = (birthYear) => {
  return 2023 - birthYear;
};
console.log("calculateAge:", calculateAge(2003));
