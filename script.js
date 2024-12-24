console.log('Hello, world!'); // console.log is a function that prints to the console.

let realName = 'Aitor'; // let is keyword that declares a variable. let is a variable, so it can be changed.
const lastName = 'Díaz'; // const is a keyword that declares a constant. const is a constant, so it can't be changed.
var isDeveloper = true; // var is a keyword that declares a global variable. var is a variable, so it can be changed.

console.log(realName); // Prints 'Aitor'.
console.log(lastName); // Prints 'Díaz'.
console.log(isDeveloper); // Prints 'true', because isDeveloper is a boolean variable.

realName = 'Pepe'; // Changes the value of realName to 'Pepe'. This is possible because realName is a variable.
console.log(realName); // Now prints 'Pepe'.

/*

  Primitive data types in JavaScript:
---------------------------------------
  - Strings: 'Hello, world!'
  - Numbers: 42
  - Booleans: true or false
  - Arrays: ['Hello', 'World', 42, true] (Arrays can contain any type of variable)
  - Objects: { realName: 'Aitor', lastName: 'Diaz', isDeveloper: true } (Objects can contain any type of variable)
  - Undefined: undefined (A variable that has not been assigned a value)
  - Null: null (A variable that has been assigned a null value)
  - Symbols: Symbol() (A unique and inmutable and unique value)
  - BigInt: 9007199254740991n (A number that can be bigger than the Number type)

*/

// How to use a string method in JavaScript. ---------------------
const myString = 'Hello, world!';
console.log(myString); // Prints 'Hello, world!'.

const myStringToUpperCase = myString.toUpperCase(); // toUpperCase is a method that converts a string to uppercase.
console.log(myStringToUpperCase); // Prints 'HELLO, WORLD!'.

// How to use an array method in JavaScript. ---------------------
const myArray = [];
console.log(myArray); // Prints an empty array [].

myArray.push('Hello, it\'s me!'); // push is a method that adds an element to the end of an array.
console.log(myArray); // Prints ['Hello, it's me!'].

const myOtherArray = ['Hello', 20]; // Creates an array with two elements.
console.log(myOtherArray[0]); // Prints 'Hello'. Arrays are zero-based.
console.log(myArray.concat(myOtherArray)); // Prints ['Hello, it's me!', 'Hello', 20]. Concat is a method that concatenates two arrays.

// How to use an object method in JavaScript. ---------------------
const myObject = { firstName: 'Aitor', lastName: 'Díaz', ig: '@espadv._', isDeveloper: true}; // Creates an object with three properties.
const field = 'ig'; // We can use a variable to access an object property.
console.log(myObject[field]); // Prints '@espadv._', because field is 'ig'.

const myOtherObject = {
  firstName: 'Pepe',
  lastName: 'García',
  isDeveloper: false,
  links: ['https://twitter.com', 'https://github.com'] // Objects can contain arrays.
}; // Other way to format an object.

// How to access an object property in JavaScript.
console.log(myObject.firstName); // Prints 'Aitor'.
console.log(myOtherObject.links[0]); // Prints 'https://twitter.com'. so we can access the first element of the links array in myOtherObject.e

// How to use a simple function in JavaScript. ---------------------
const sumar = (operando_1, operando_2) => { // Function expression that receives two arguments.
  console.log(operando_1); // Prints the value of operando_1.
  console.log(operando_2); // Prints the value of operando_2.
  return operando_1 + operando_2; // Returns the sum of operando_1 and operando_2.
}

console.log(sumar(2, 3)); // Prints 2 and 3, and returns 5.

// Other way to do the same function.
function sumar_2(operando_1, operando_2) { // Function declaration that receives two arguments.
  console.log(`Operando 1: ${operando_1}`);
  console.log(`Operando 2: ${operando_2}`);
  return `Resultado: ${operando_1 + operando_2}`;
}

const num1 = 2; // Declares a variable with the value 2.
const num2 = 3; // Declares a variable with the value 3.

console.log(sumar_2(num1, num2)); // so we can use variables as arguments in a function.
