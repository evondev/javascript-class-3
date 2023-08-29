const usersList = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    score: 10,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    score: 70,
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    score: 20,
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    score: 20,
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    score: 50,
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "abcRachel",
    last_name: "Howexyzll",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    score: 100,
  },
];
const usersScore70 = usersList.filter((user, index, array) => user.score >= 70);
// console.log("usersScore70:", usersScore70);
const lindsay = usersList.find((item) => {
  const result =
    item.first_name.startsWith("abc") && item.last_name.includes("xyz");
  return result;
});
console.log("lindsay ~ lindsay:", lindsay);
// console.log("lindsay:", lindsay);
// delete user with id is 8
// find user index with id is 8
const findUser = usersList.findIndex((user) => user.id === 8);
console.log("findUser:", findUser);
// if found
if (findUser !== -1) {
  usersList.splice(findUser, 1);
}
console.log("usersList:", usersList);
