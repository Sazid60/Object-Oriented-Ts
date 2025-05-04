{
  //
  // OOP-CLASS

  class Animal {
    // As all properties are publicly accessible we can use public access modifier to reduce writing code
    // name: string;
    // species: string;
    // sound: string;

    // As all properties are publicly accessible we can use public access modifier to reduce writing code
    // public name: string;
    // public species: string;
    // public sound: string;
    // If we use Public access modifier in top of here still we have to declare inside the constructor. Still a lot of code. To solve this ts have gave us parameter properties. This means we will just write inside the constructor

    //   If We declare class we must have to call contractor and give the values and initialize
    // A constructor is a special method used to create and initialize an instance of a class.

    // we will again define the type inside the contractor while giving to contractor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // Initializer isn’t a formal JavaScript keyword, but it commonly refers to code that sets the initial values of properties, this.name
      // The initializer is each assignment (this.property = value) inside the constructor that sets up the object’s initial state.
      // not require to initialize since we are using parameter properties
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    //   method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  //   to use the class we have to use new keyword
  const dog = new Animal("Persian", "Dog", "Bark");
  dog.name;
  dog.sound;
  dog.species;
  dog.makeSound();

  const cat = new Animal("Deshi", "Cat", "Bilai Mew");
  cat.name;
  cat.sound;
  cat.species;

  cat.makeSound();
  //
}
