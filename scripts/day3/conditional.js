const myFavoriteFood = "pizza";
const myKilograms = 60;
function checkFood(food, kilo) {
  if (food === "pizza" && kilo > 80) {
    console.log("My favorite food is pizza!");
  } else if (kilo !== 60) {
    console.log("My favorite food is not pizza!");
  } else {
    console.log("I don't know what my favorite food is!");
  }
}
// checkFood(myFavoriteFood, myKilograms);
checkFood("hamburger", 20);
// true && false -> false
