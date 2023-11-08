/*
7) javascript es6 class inheritance

Create a JavaScript class named Animal with a constructor that takes two parameters: name and sound. The class should have a method named makeSound that logs the sound of the animal.

Next, create a subclass of Animal named Dog. The Dog class should have an additional method named fetch that logs "Fetching the ball!".

Example:
const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"
const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"
*/

// Start javascript code here
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    fetch() {
        console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound(); 

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); 
dog.fetch(); 
