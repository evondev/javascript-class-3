{
  const student = {
    name: "evondev",
    age: 20,
    school: "CKC",
    getFullName() {
      // console.log(this);
      // const _this = this;
      return () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
      };
    },
  };
  console.log(student.getFullName()());
  Object.seal(student);
  student.age = 20;
  // console.log("file: object.js:71 ~ student:", student);
  const studentKeys = Object.keys(student);
  // console.log("file: object-continue.js:11 ~ studentKeys:", studentKeys);
  const studentValues = Object.values(student);
  // console.log("file: object-continue.js:13 ~ studentValues:", studentValues);
  const studentEntries = Object.entries(student);
  // console.log("file: object-continue.js:15 ~ studentEntries:", studentEntries);
  // function Student(name, age, school) {
  //   this.name = name;
  //   this.age = age;
  //   this.school = school;
  // }
  function helloWorld() {
    console.log(this);
  }
  console.log(
    "file: object-continue.js:22 ~ helloWorld ~ helloWorld:",
    helloWorld
  );

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  class Student extends Person {
    constructor(name, age, school) {
      super(name, age);
      this.school = school;
    }
    // getter
    get mySchool() {
      return this.school;
    }
    // setter
    set mySchool(value) {
      this.school = value;
    }
    // private
    showInfo() {
      console.log(`My name is ${this.name}`);
    }

    static hobby() {
      console.log("I love to learn Javascript very much");
    }
  }

  const doanStudent = new Student("Phuong Doan", 20, "HaNoi");
  console.log(
    "file: object-continue.js:48 ~ doanStudent:",
    doanStudent.showInfo()
  );
  doanStudent.mySchool = "VietNam";
  console.log("line 72");
  console.log(doanStudent.mySchool);
  Student.hobby();
  const haoStudent = new Student("Hao Nguyen", 18, "Hue");
  console.log(
    "file: object-continue.js:49 ~ haoStudent:",
    haoStudent.showInfo()
  );
  // functional programming
}
