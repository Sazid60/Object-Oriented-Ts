{
  // Polymorphism
  //  If anything changes based on the situation its like Polymorphism
  // Polymorphism is when a method changes based on the place time and container.

  class Person {
    getSleep() {
      console.log(`I am Sleeping 8 Hours Per Day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am Sleeping 7 Hours Per Day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am Sleeping 6 Hours Per Day`);
    }
  }

  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHour(person1);
  getSleepingHour(person2);
  getSleepingHour(person3);

  //    More Example

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    // param theke ami polymorphism kore call korlam get area k
    console.log(param.getArea());
  };
  const shape = new Shape();
  const rect = new Rectangle(1, 2);
  const circle = new Circle(2);

  //   shape.getArea()
  //   rect.getArea()
  //   circle.getArea

  // console.log(shape);
  // console.log(rect);
  // console.log(circle);

  console.log(shape.getArea());
  //   or we can use the function
  getShapeArea(shape);
  getShapeArea(rect);
  getShapeArea(circle);
}
