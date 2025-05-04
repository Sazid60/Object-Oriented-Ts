# Object Oriented Typescript

GitHub LInk: GitHub Link: https://github.com/Apollo-Level2-Web-Dev/Apollo-Level2-Web-Dev-batch-5-be-a-typescript-technocrat/tree/main/module3

Welcome back to the next step in your TypeScript journey!

In this module, you'll dive into the heart of Object-Oriented Programming (OOP). Here's what you'll explore:

Introduction of Object Oriented Programming

We will introduce you to object oriented programming. You'll learn what OOP is and how OOP principles help structure and maintain complex codebases.

Class and object

Classes serve as blueprints for creating objects, which are instances that encapsulate both state and behavior. You'll learn how to define classes with properties and methods, create objects from them, and understand why this pattern is crucial for building scalable and maintainable applications.

Inheritance in OOP

Continuing our exploration of Object-Oriented Programming, we will let talk about inheritance, one of the most powerful tools for code reuse. Inheritance allows a class to inherit properties and methods from another class, creating a parent-child relationship.

Type guard using typeof & in

When working with dynamic types, it's crucial to ensure that you're dealing with the expected type. TypeScript offers type guards to help with this. In this video, you'll explore how to use the typeof operator to check the type of a variable at runtime, providing a safe way to implement conditional logic based on variable types.

Type guard using instance of

Building on your knowledge of type guards, this video introduces instanceof, a powerful operator that allows you to check whether an object is an instance of a specific class. This is particularly useful in OOP, where objects might belong to different classes in an inheritance hierarchy.

Access modifiers

Access modifiers are a key concept in Object-Oriented Programming, allowing you to control the visibility of class properties and methods. In this video, you'll learn about the different access modifiers in TypeScript

Getter and setter

Take control of how your class properties are accessed and modified! You'll learn how to define getters and setters in TypeScript and explore their benefits

Statics in OOP

Static properties and methods belong to the class itself, not to individual instances. We'll explore the concept of static members in TypeScript, showing you how to declare and use them.

Polymorphism

Polymorphism is a fundamental concept in Object-Oriented Programming that allows different classes to be treated as if they are the same through a common interface or base class. In this video, you'll learn how to implement polymorphism in TypeScript.

Abstraction in OOP

Abstraction allows you to hide complex implementation details behind a simple interface, providing a cleaner and more focused interaction with code. In this video, you'll learn how to use abstract classes and interfaces in TypeScript to create high-level blueprints.

Encapsulation in OOP

Encapsulation is the practice of restricting access to certain parts of a class, ensuring that internal details remain hidden from external code. We will delve into encapsulation in TypeScript, demonstrating how to use access modifiers, private properties, and other techniques to safeguard your code's internal state.

With this knowledge, you can confidently build complex applications that are both maintainable and resilient. Keep practicing and experimenting with these concepts. The more you apply them, the more intuitive they will become!

## 3-0 Introduction To Object Oriented Programming

#### What is Object Oriented Programming?

- It is a programming Paradigm that organizes and models software in small pieces.

#### what is paradigm ?

- But what is paradigm? Paradigm Is A style or guideline Of Writing code. By which we can organize our code .
- When the project is large and de do not maintain paradigm each one's code will be different and will not be maintainable.

#### Types Of Paradigm

- Procedural Paradigm
  1. In here set of instructions are executed one by one
  2. Procedural programming is a coding approach that organizes a computer program into a set of structured procedures consist of a series of well-defined steps or instructions that are executed sequentially. however, it may lack the flexibility and reusability of more advance programming paradigm.

![alt text](<WhatsApp Image 2025-05-04 at 19.57.26_16dc7cba.jpg>)

- Functional Paradigm
  1. In this paradigm function is the king. Codes are Organized In Functional Way.
  2. Functional Programming Is Like using a set of building blocks that are like mathematical functions. This helps in making your code easier to understand and less likely to have bugs

![alt text](<WhatsApp Image 2025-05-04 at 20.11.24_410a6914.jpg>)

- Declarative Programming
  1. In here we can understand what will be the outcome of this instance.
  2. Declarative programming is an approach to write computer programs that focuses on describing the desired outcome or result, rather than explicitly specifying the step by step instructions to achieve that outcome. In Declarative programming, you define what you want to accomplish and the underlying system or framework figures out how to achieve.

![alt text](<WhatsApp Image 2025-05-04 at 20.18.00_4b4d66f5.jpg>)

- Object Oriented Programming
  1. In here we use object,class to organize our codes. Data and methods can be kept together coupled
  2. Object-Oriented Programming is a programming paradigm that organizes code around objects, which are instances of classes defining data and behavior. In OOP software is designed by modeling real-world entities as objects, each having attributes (data) and methods(function) that operate on data.

![alt text](<WhatsApp Image 2025-05-04 at 20.25.28_f4009ce4.jpg>)

- Event Driven Programming
  1. In Html If any Event Fires we can do any work. we will use event driven programming in node and express
  2. Event Driven Programming is a paradigm that resolves around responding to events or signals generated by the system or user interactions. In event Driven Programming, software is designed to wait for and react to events, such as user clicks, keyboard inputs, or system notification

![alt text](<WhatsApp Image 2025-05-04 at 20.29.34_4057b79b.jpg>)

- Programming can be done in functional way or object oriented way depending on situation.

### Building Blocks Of OOP

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation
