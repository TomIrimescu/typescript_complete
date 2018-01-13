"use strict";
// Classes & Inheritance
/*class Person {
  name: string;
  private type: string;
  protected age: number = 33;
  
  constructor(name: string, public username: string) {
    this.name = name;
  }
  
  
  printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }
  
  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Tomcat", "tomcat");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

// Inheritance
class Tomcat extends Person {
   // name = "Mercury";
  
  constructor(username: string) {
    super("Tomcat", username);
    this.age = 44;
  }
}
const tomcat = new Tomcat("freddy");
console.log(tomcat);*/
// Getters & Setters
/*
class Plant {
  private _species: string = "Default";
  
  get species() {
    return this._species;
  }
  
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);*/
// Static Properties & Methods
/*
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));*/
// Abstract Classes -need to be extended not instantiated
/*
abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;
  
  abstract changeName(name: string): void; // no curly braces - no function body -required to implement the function body for this method in the child class
  
  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);*/
// Private Constructor -Singleton & Readonly
/*
class OnlyOne {
  private static instance: OnlyOne;
  
  private constructor(public readonly name: string) {}
  
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance  = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One'); // this will cause an error
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; // public property cannot be overwritten if readonly
// console.log(right.name);*/
