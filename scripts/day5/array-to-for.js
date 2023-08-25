// # map
const numbers = [1, 2, 3, 4, 5];
const res = numbers.map((item) => item * 2);
const res2 = [];
for (let index = 0; index < numbers.length; index++) {
  const value = numbers[index];
  res2.push(value * 2);
}
// console.log(res2);
// # filter
const res3 = [];
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 2) {
    res3.push(element);
  }
}
console.log("res3:", res3);
// # some
let isExist = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 5) isExist = true;
}
console.log("isExist:", isExist);
// # every
let isEqual = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element <= 3) isEqual = false;
}
console.log("isEqual:", isEqual);
