{
  // static

  class Counter {
    // we are defining default value = 0 ;
    static count: number = 0;

    //  In this Class there is no constructor since we are not taking any value for making class

    static increment() {
      // If we want to call any static we have to Call by the Class
      return (Counter.count = Counter.count + 1);
    }
    static declarecrement() {
      return (Counter.count = Counter.count - 1);
    }
  }
  //   const instance1 = new Counter();
  //   console.log(instance1.increment()); //1
  //   console.log(instance1.increment()); //2
  //   console.log(instance1.increment()); //3

  //   const instance2 = new Counter();
  //   console.log(instance2.increment()); //4
  //   console.log(instance2.increment()); //5
  //   console.log(instance2.increment()); //6

  console.log(Counter.increment());
  console.log(Counter.declarecrement());
}
