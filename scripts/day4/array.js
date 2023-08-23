// # Declaration
const arr = new Array(4); // [undefined, undefined, undefined, undefined]
const arr2 = [1, 2, 3, 4]; // Literal
const arr3 = new Array(1, 2, 3, 4); // Constructor
console.log(arr2.length); // 4
console.log(arr2[0]); // 1
console.log(arr2[1]); // 2
console.log(arr2[2]); // 3
const scores = [1, 2, 3, 4, 5];
for (let index = 0; index < scores.length; index++) {
  const element = scores[index];
  console.log("element:", element);
}
const complexArr = [
  1,
  [2, 3],
  "Hello",
  true,
  { name: "John", age: 30 },
  function () {
    console.log("Hello");
  },
];
// Array.isArray(value) -> true | false
const numbers = [1, 2, 3, 4, 5];
// # Methods
// ## push
numbers.push(6); // [1, 2, 3, 4, 5, 6]
// ## pop
numbers.pop(); // [1, 2, 3, 4, 5]
// ## unshift
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]
// ## shift
numbers.shift(); // [1, 2, 3, 4, 5]
// ## reverse
numbers.reverse(); // [5, 4, 3, 2, 1]
// ## includes
numbers.includes(3); // true
numbers.includes(10); // false
// ## concat
const numbers2 = [6, 7, 8, 9, 10];
const numbers3 = numbers.concat(numbers2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("numbers3:", numbers3);
// ## indexOf
numbers.indexOf(3); // 2
numbers.indexOf(10); // -1
// ## join
numbers.join(); // "1,2,3,4,5"
"i love javascript".split(" ").join("-"); // "i-love-javascript"
const numbers5 = [1, 2, 3, 4, 5];
// ## slice
numbers5.slice(1, 4); // [2, 3, 4]
numbers5.slice(); // [1, 2, 3, 4, 5]
numbers5.slice(1); // [2, 3, 4, 5]
numbers5.slice(2); // [3, 4, 5]
numbers5.slice(-3, -5); // []
// ## splice
console.log(numbers5.splice(1, 2)); // [2, 3]
console.log(numbers5); // [1, 4, 5]
numbers5.splice(1, 0, 10, 20, 30); // [1, 10, 20, 30, 2, 3, 4, 5]
// ## at
const numbers6 = [1, 2, 3, 4, 5];
numbers6.at(0); // 1
numbers6.at(-1); // 5
numbers6[numbers6.length - 1]; // 5
// ## lastIndexOf
const numbers7 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
numbers7.lastIndexOf(1); // 5
// ## fill
const numbers8 = [1, 2, 3, 4, 5];
numbers8.fill(0); // [0, 0, 0, 0, 0]
// ## find
const numbers9 = [1, 2, 3, 4, 5];
const results = numbers9.find((element) => element > 3); // 4
console.log("results:", results);
// ## findIndex
const numbers10 = [1, 2, 3, 4, 5];
const results2 = numbers10.findIndex((element) => element > 3); // 3
// ## map
const numbers11 = [1, 2, 3, 4, 5];
const results3 = numbers11.map((element, index, arr) => element * 2); // [2, 4, 6, 8, 10]
// ## filter
const numbers12 = [1, 2, 3, 4, 5];
const results4 = numbers12.filter((element, index, arr) => element > 3); // [4, 5]
// ## reduce
const numbers13 = [1, 2, 3, 4, 5];
const results5 = numbers13.reduce((accumulator, element, index, arr) => {
  return accumulator + element;
}, 0); // 15
// ## some
const numbers14 = [1, 2, 3, 4, 5];
const results6 = numbers14.some((element, index, arr) => element > 3); // true
// ## every
const numbers15 = [1, 2, 3, 4, 5];
const results7 = numbers15.every((element, index, arr) => element > 3); // false
// ## forEach
const numbers16 = [1, 2, 3, 4, 5];
numbers16.forEach((element, index, arr) => {
  console.log("element:", element);
});
