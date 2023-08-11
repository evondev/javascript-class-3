// # Variables
// Uncaught ReferenceError: Cannot access 'student' before initialization
// console.log(student);
// Declare a variable
let student = "Han Le";
student = "Trang Nguyen";
// let: keyword
// student: variable name
// Naming convention:
// wrong: 1student, student-1, student 1
// right: student1, student_1, studentOne, student_one
// camelCase: studentOne, studentTwo, studentThree
// iwanttolearnjavascript: iWantToLearnJavascript
// = : assignment operator -> phép gán
// "Han Le": value: number, string, boolean, null, undefined, object, array
const age = 18;
// age = 20; -> error
// const: keyword
// age: variable name
// 18: value
// const: constant
// = : assignment operator
console.log("Hello World!");
const isMale = true;
const isFemale = false;
// # Data types
// 1. string -> chuỗi -> "evondev", 'javascript', `document` -> template literals: backticks
// 1.1 concat string + -> "evondev" + "javascript" -> "evondevjavascript"
const studentName = "evondev";
const studentAge = 20;
const studentAddress = "Sai Gon";
// const information =
//   "My name is \n" +
//   studentName +
//   " , I'm " +
//   studentAge +
//   " years old, I live in " +
//   studentAddress;
const information = `My name is ${studentName}, I'm ${studentAge} years old, I live in ${studentAddress}`;
console.log(information);
// 2. number -> 1, 2.5, 3.7, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000
const count = 10;
const price = 10.5;
const total = count * price;
console.log("total:", total);
// 3. boolean -> true, false
const isStudent = true;
const isTeacher = false;
// Falsy values: false, 0, "",'', null, undefined, NaN
// 4. null -> empty
const empty = null;
// 5. undefined -> not defined
let value;
// 'const' declarations must be initialized.
// const keycode;
console.log("value:", value);
// ctrl + alt + L
// ctrl + option + L
// 6. object -> {key: value, key: value, key: value}
const studentInfo = {
  name: "evondev",
  age: 20,
  address: "Sai Gon",
};
const studentInfo2 = {
  name: "Han Le",
  age: 18,
  address: "Japan",
};
// 7. array -> [value, value, value]
const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("a:", a);
var a = 1;
a = 2;
// # Scope: global scope, block scope
// global scope: var
// block scope: let, const
// lexical scope
{
  var gift = "🎁";
}
console.log("gift:", gift);
// Uncaught ReferenceError: gift is not defined
// # typeof value-variable
console.log(typeof 10);
console.log(typeof student);
// 111 + "1"
