// # map
const numbers = [1, 2, 3, 4, 5];
const x5Numbers = numbers.map((value) => {
  // if (value >= 3) return value * 5;
  // return value * 2;
  // if (value === 3) return value;
  // if (value >= 4 && value <= 5) return value * 2;
  // return value * 10;
  // if (value % 2 === 0) return value * 0;
  // return 1;
});
// console.log("x5Numbers ~ x5Numbers:", x5Numbers);
// # filter
const filterNumbers = numbers.filter((value) => {
  if (value >= 1) return value * 2;
  return value * 5;
});
// console.log("filterNumbers ~ filterNumbers:", filterNumbers);
// # some
const isExist = numbers.some((value) => {
  return value <= 0;
});
console.log("isExist ~ isExist:", isExist);
// # every
const isEqual = numbers.every((value) => value > 3);
console.log("isEqual:", isEqual);
// # reduce
const total = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log("total ~ total:", total);
// # forEach
let total2 = 0;
const numberForeach = numbers.forEach((value) => {
  total2 += value;
});
console.log("numberForeach ~ numberForeach:", total2);
