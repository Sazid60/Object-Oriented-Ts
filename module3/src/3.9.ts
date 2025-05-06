{
  //Abstraction
  //  It like we will not know the real thing but we will get an idea of the what is happening.
  //    abstraction can be done in two ways.
  // 1. Using Interface
  // 2. Using Abstract Class

  // Using Interface
  type Vehicle1 = {
    //  HER WE ARE JUST GETTING THE IDEA BUT WE ARE NOT UNDERSTATING WHAT BIS HAPPING INSIDER THE FUNCTION INSIDE THE CLASS
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  };
  //   If any Class wants to follow any structure it should use implements

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I am Starting The engine");
    }
    move(): void {
      console.log("I am Moving The Car");
    }
    stopEngine(): void {
      console.log("I am Stopping The engine");
    }
    // ALL The type are satisfied after that we can declare whatever method we want
    test() {
      console.log("I am Just Testing");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //  now doing it using abstract class
  // Abstract class is leader class since we know we have a leader or mentor in our life and we want to be like them and follow them.

  //  So same like this we will make a class (leader) that other class will follow the leader class

  abstract class Car1 {
    // startEngine(): void {
    //   console.log("I am Starting The engine");
    // }

    // move(): void {
    //   console.log("I am Moving The Car");
    // }
    // stopEngine(): void {
    //   console.log("I am Stopping The engine");
    // }
    // test() {
    //   console.log("I am Just Testing");
    // }

    // we will not the implementation in the abstract class. we will just give the idea
    abstract startEngine(): void;
    abstract move(): void;
    abstract stopEngine(): void;
    // as it is not abstract it we be absorbed in the extended class inheritably
    test() {
      console.log("I am Just Testing");
    }
  }

  //   as we are using abstraction and we can not make instance from the abstract class we have to make child class
  class ToyotaCar extends Car1 {
    // we can access the methods from the parent class this is inheritance
    // startEngine(): void {
    // }
    //  but we do not want that e want to make polymorphism since we want to hide the real implementation. we will not the implementation in the abstract class
    startEngine(): void {
      console.log("I am Starting The engine");
    }
    move(): void {
      console.log("I am Moving The Car");
    }
    stopEngine(): void {
      console.log("I am Stopping The engine");
    }
  }
  // We can Follow an abstract class but we can not make instance from the abstract class
  //    so this will show error
  //   const hondaCar = new Car1();
  //   hondaCar.startEngine()

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();
}
