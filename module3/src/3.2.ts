{
  // oop inheritance
  //   parent class
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // we are telling that Student please extend your Father Parent class
  class Student extends Person {
    // though we are using parents property still we have to use constructor since its required to make object
    constructor(name: string, age: number, address: string) {
      // why super? This student class contractor is getting the values from where the class is created. The properties are absorbed from parent class so we have to send the received things to the parent Constructor to get the worked done using super(), since parent is the real owner.
      super(name, age, address);
    }
  }

  const student1 = new Student("sazid", 20, "Uganda");
  student1.getSleep(12);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} Class`);
    }
  }

  const teacher1 = new Teacher("sazid", 20, "Uganda", "faculty");
  teacher1.takeClass(700);
}
