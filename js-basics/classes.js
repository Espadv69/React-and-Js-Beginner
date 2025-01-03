let person = {
  firstName: 'John',
  age: 30,
  born: 1990,
}
console.log(person) // output: { firstName: 'John', age: 30, born: 1990 }

// Class syntax. This is a class declaration
class Person {
  constructor(firstName, age, born) {
    this.firstName = firstName
    this.age = age
    this.born = born
  }
}

// Creating an instance of the class
let newPerson = new Person('Aitor', 21, 2003)
console.log(newPerson) // output: Person { firstName: 'Aitor', age: 21, born: 2003 }


// default values
class DefaultPerson {
  constructor(firstName = 'Elena', age = 25, born) {
    this.firstName = firstName
    this.age = age
    this.born = born
  }
}

let defaultPerson = new DefaultPerson()
console.log(defaultPerson) // output: DefaultPerson { firstName: 'Elena', age: 25, born: undefined }

// How to access class properties. Dot notation
console.log(defaultPerson.firstName) // output: Elena

// How to access class properties. Bracket notation
console.log(defaultPerson['firstName']) // output: Elena

// How to access class properties. Dynamic property names
let propertyAge = 'age'
console.log(defaultPerson[propertyAge]) // output: 25

// How to add values to a class
defaultPerson.born = 1994
console.log(defaultPerson) // output: DefaultPerson { firstName: 'Elena', age: 25, born: 1994 }. Before it was { firstName: 'Elena', age: 25, born: undefined }

// How to add functions to a class
class PersonWithFunction {
  constructor(firstName, age, born) {
    this.firstName = firstName
    this.age = age
    this.born = born
  }

  walk() {
    console.log('I\'m walking')
  }
}

let personWithFunction = new PersonWithFunction('Aitor', 21, 2003)
personWithFunction.walk() // output: I'm walking

// Private properties
class PrivatePerson {
  #bankAccount

  constructor(firstName, age, born, bankAccount) {
    this.firstName = firstName
    this.age = age
    this.born = born
    this.#bankAccount = bankAccount
  }

  getBankAccount() {
    return this.#bankAccount
  }
}

let privatePerson = new PrivatePerson('Aitor', 21, 2003, 'IBAN1234')
console.log(privatePerson.bankAccount) // output: undefined. It's a private property. It can't be accessed from outside the class.

// Getters and setters
class GettersSettersPerson {
  #firstName
  #lastName
  #alias
  #bankAccount

  constructor(firstName, lastName, alias, bankAccount) {
    this.#firstName = firstName
    this.#lastName = lastName
    this.#alias = alias
    this.#bankAccount = bankAccount
  }

  get firstName() {
    return this.#firstName
  }


  /**
   * @param {any} newBankAccount
   */
  set bankAccount(newBankAccount) {
    this.#bankAccount = newBankAccount
  }
}

let gettersSettersPerson = new GettersSettersPerson('Aitor', 'Ramos', 'aitorramos', 'IBAN1234')
console.log(gettersSettersPerson.firstName) // output: Aitor. This is just a getter. It can't be modified.
console.log(gettersSettersPerson.lastName) // output: undefined. lastName is not defined in the class.

// inheritance
class Animal {
  constructor(aName) {
    this.aName = aName
  }

  run() {
    console.log('Dog is running')
  }

  sound() {
    console.log('Emits a sound')
  }

  swim() {
    console.log('Fish is swimming')
  }
}

class Dog extends Animal{
  constructor(aName, weight, breed) {
    super(aName)
    this.weight = weight
    this.breed = breed
  }

  sound() {
    console.log('Barks')
  }
}

class Fish extends Animal {
  constructor(aName, weight) {
    super(aName) // super() calls the constructor of the parent class
    this.weight = weight
  }

  sound() {
    super.sound() // super.sound() calls the sound method of the parent class
  }
}

let dog = new Dog('Buddy', 20, 'Golden Retriever')
console.log(dog) // output: Dog { aName: 'Buddy', weight: 20, breed: 'Golden Retriever' }
dog.sound() // output: Emits a sound
dog.run() // output: Dog is running

let fish = new Fish('Nemo', 10)
console.log(fish) // output: 10
fish.sound() // output: Emits a sound
fish.swim() // output: Fish is swimming
// This is called inheritance. Dog, Fish class inherits from the Animal class. It has access to the sound method.


// Static methods. Static methods are called on the class itself, not on the instance of the class.
class MathOperations {
  static sum(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }

  static multiply(a, b) {
    return a * b
  }
}

let sum = MathOperations.sum(2, 3)
console.log(sum) // output: 5

let subtract = MathOperations.subtract(5, 3)
console.log(subtract) // output: 2

let multiply = MathOperations.multiply(2, 3)
console.log(multiply) // output: 6