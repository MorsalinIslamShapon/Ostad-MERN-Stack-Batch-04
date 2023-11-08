/*
8) javascript es6 super keyword

Create a JavaScript class named Person with a constructor that takes two parameters: name and age. The class should have a method named introduce that logs a greeting message including the person's name and age.

Next, create a subclass of Person named Student. The Student class should have an additional property named major and an overridden introduce method. The overridden introduce method should log a message that includes the person's name, age, and major.

Example:
const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");

student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."

*/

// Start javascript code here 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

const person1 = new Person("John", 30);
person1.introduce(); 

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); 
