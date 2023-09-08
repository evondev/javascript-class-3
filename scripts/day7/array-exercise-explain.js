function repeatStrArr(number, str) {
  if (typeof number !== "number" || typeof str !== "string") return [];
  const results = [];
  for (let index = 0; index < number; index++) {
    results.push(str);
  }
  return results;
}
console.log("repeatStrArr");
console.log(repeatStrArr(5, true));
function reverseArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const results = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    results.push(arr[index]);
  }
  return results;
}
console.log("reverseArray ~ reverseArray:", reverseArray("abc"));
function removeFalsyValueArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  return arr.filter((item) => Boolean(item));
}
console.log(
  "removeFalsyValueArr ~ removeFalsyValueArr:",
  removeFalsyValueArr([1, 2, 3, 0, false, undefined])
);
function countLetters(str) {
  const results = {};
  const strArr = [...str];
  for (let index = 0; index < strArr.length; index++) {
    const element = strArr[index];
    // console.log(results[element] + 1);
    results[element] = results[element] + 1 || 1;
    // results[element] = NaN || 1;
  }
  return results;
}
// console.log(`line 38`);
// console.log(undefined + 1);

console.log("countLetters:", countLetters("abbcccddddeeeee"));
