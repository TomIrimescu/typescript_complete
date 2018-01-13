//string type inferred
let myName = 'Tomcat';
// myName = 28;

// number type inferred
let myAge = 27;
// myAge = 'Tomcat';

// boolean type inferred
let hasHobbies = false;
// hasHobbies = 1;

// assign type explicitly
let myRealAge: number;
myRealAge = 27;

// array type
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];

// tuples -arrays with different types
let address: [string, number] = ['Superstreet', 99];

// enum type
enum Color {
  Gray, // 0
  Green = 13, // 1
  Blue // 2
}
let myColor: Color = Color.Green;
console.log(myColor);

// any type
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3};
console.log(car);

// function type
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void type
function sayHello(): void {
  console.log('Hello');
}
sayHello();

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// object types
let userData: { name: string, age: number} = {
  name: 'Tomcat',
  age: 27
};
// userData = {
//   a: 'Hello',
//   b: 22
// };

// complex object type
let complex: {data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  
  output: function(): number[] {
    return this.data;
  }
};

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 3.99, 10],
  
  output: function(): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true;

// check type
let finalValue = 30;
if (typeof finalValue == 'number') {
  console.log('Final value is a number');
}

// never type
function neverReturns():never {
  throw new Error('An error');
}

// nullable type
let canBeNull: number | null = 13;
canBeNull = null;
console.log(canBeNull);
let canAlsoBeNull;
console.log(canAlsoBeNull);
let canThisBeAny = null;
// canThisBeAny = 13;
console.log(typeof(canThisBeAny));
console.log(canThisBeAny);


