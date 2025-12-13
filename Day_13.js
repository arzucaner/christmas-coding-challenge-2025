// Question (Classes, Inheritance & Static Members)

// What will be logged to the console?

class Person {
  static species = "Homo sapiens";

  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  static createAnonymous() {
    return new Person("Anonymous");
  }
}

class Student extends Person {
  constructor(name, major) {
    super(name);
    this.major = major;
  }

  greet() {
    return super.greet() + ` and I study ${this.major}`;
  }
}

const s = new Student("Ada", "Computer Science");

console.log(s.greet());
console.log(Student.species);
console.log(typeof Student.createAnonymous);
console.log(Student.createAnonymous().name);

Solution

// The output will be:

Hi, I'm Ada and I study Computer Science
Homo sapiens
function
Anonymous

Explanation 

s.greet()

Uses Student’s greet, which calls super.greet() from Person

→ "Hi, I'm Ada and I study Computer Science"

Student.species

species is a static field on Person, and static properties are available via the class and its subclasses

→ "Homo sapiens"

typeof Student.createAnonymous

createAnonymous is a static method on Person, also accessible on Student

→ "function"

Student.createAnonymous().name

Calls the static method, which returns new Person("Anonymous")

→ .name is "Anonymous".