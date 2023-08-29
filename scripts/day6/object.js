{
  // const myName = "evondev";
  // const myAge = 20;
  // const mySchool = "CKC";
  // const myHobbies = ["Badminton", "Coding", "Listen to music"];
  const evondevInformation = {
    name: "evondev",
    age: 20,
    school: "CKC",
    hobbies: ["Badminton", "Coding", "Listen to music"],
    "my-friends": null,
    devices: {
      name: "keyboard",
      title: "Akko",
    },
  };
  const trangNguyenInformation = {
    name: "trangnguyen",
    age: 20,
    school: "CKC",
    hobbies: ["Badminton", "Coding", "Listen to music"],
    "my-friends": null,
    devices: {
      name: "keyboard",
      title: "Akko",
    },
  };
  // const myName = evondevInformation.name;
  // const myAge = evondevInformation.age;
  // const mySchool = evondevInformation.school;
  // const myHobbies = evondevInformation.hobbies;
  // Destructuring
  const { name, age, school, hobbies } = evondevInformation;
  // const {
  //   name: name2,
  //   age: age2,
  //   school: school2,
  //   hobbies: hobbies2,
  // } = trangNguyenInformation;
  // Dot notation
  console.log(evondevInformation.age);
  evondevInformation["my-friends"];
  // Bracket notation
  console.log(evondevInformation["hobbies"]);
  console.log(evondevInformation.something);
  // console.log(evondevInformation.devices.name);
  // console.log(undefined.somethingelse);
  const deviceName = evondevInformation?.devices?.black?.yellow;
  console.log(deviceName);
  // delete evondevInformation.age;
  // console.log(evondevInformation);
  const { name: name2, ...rest } = trangNguyenInformation;
  console.log("name2:", name2);
  console.log("rest:", rest);

  // const yourInformation = { ...evondevInformation };
  const yourInformation = JSON.parse(JSON.stringify(evondevInformation));
  yourInformation.devices.name = "Keychron";
  console.log("evondevInformation:", evondevInformation);
  console.log("yourInformation:", yourInformation);
  // const num1 = 10;
  // let num2 = num1;
  // num2++;
  // console.log("num1:", num1);
  // console.log("num2:", num2);
}
