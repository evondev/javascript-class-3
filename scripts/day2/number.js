// # Interger
const score = 10;
// # Float
const kilo = 10.5;
// # Methods
console.log(Math.floor(kilo)); // 10
console.log(Math.ceil(kilo)); // 11
console.log(Math.round(kilo)); // 11
console.log(Math.trunc(kilo)); // 10
console.log(Math.random()); // 0.123456789
console.log(Math.random() * 10); // 1.23456789
const random = Math.random();
console.log(Math.floor(random * 10)); // 1
console.log(Math.PI);
console.log(Math.sqrt(9)); // 3
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.abs(-10)); // 10
console.log(Math.sign(-10)); // -1
console.log(Math.sign(10)); // 1
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 1
const longNumber = 27.123456789;
console.log(longNumber.toFixed(5)); // 27.12346
// Format number with count decimal
const count = Math.pow(10, 0);
console.log(Math.floor(longNumber * count) / count); // 27
console.log(Math.floor(Math.random() * 10));
// # Get range from 5 -> 27
const min = 5;
const max = 28;
const range = Math.random() * (max - min) + min;
console.log(Math.floor(range) + 1);
// # Convert string to number
console.log(Number("123abc"));
console.log(Number("123")); // 123
console.log(Number("123.123")); // 123.123
console.log(parseInt("123.123")); // 123
console.log(parseFloat("123.123")); // 123.123
console.log(+"123.123"); // 123.123
