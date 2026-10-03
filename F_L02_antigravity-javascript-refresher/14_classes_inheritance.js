class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, this is ${this.name}.`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is currently reviewing JavaScript :>`);
  }
}

const student = new Student("JR");
student.sayHello(); // inherited
student.study();    // its own
