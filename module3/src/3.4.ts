{
  // Type Guard Using Instance Of
  //

  //   parent class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am Making Sound");
    }
  }

  //   child class

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am Braking");
    }
  }
  //   child class
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I am Mewing");
    }
  }

  //   suppose we are making a function that will get animal
  //  any parent class or child class be written as a type

  const getAnimal = (animal: Animal) => {
    // animal.
    // after building child parent class in the function we have used the Animal class as Type. It can access the animals property not specifically cat or dog properties. Because Ts is not understanding that if the argument sent in the function is dog or cat.
    // we have to use a guard to make Ts Understandable that the sent argument is really dog or really a cat
    //  we will use instance of to since the Dog or Cat is instance of a class. we have to check Dog is which's instance and Cat is which's instance.

    // The guarding checking can be handled in smart way using function
    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
      // this is returning true which is good enough to satisfy the condition
      // there is a problem since it is returning boolean and the Ts can not understand which type of animal it is.and show error
      //  to solve this we have to specifically say its a cat or dog so that ts can understand
      // animal is Cat this is also a boolean but more specific
    };
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    };
    if (isDog(animal)) {
      animal.makeBark();
      // now accessible to all
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Kuuta", "dog");
  const cat = new Cat("Bilui", "cat");

  getAnimal(dog);
}
