console.log ("connected");
//ES6 Update (2015)

//Exponent Operator

//BEFORE 
//Math.pow() is being use for exponent operator

const firstNum = Math.pow(8,2);
console.log(firstNum); //64

//ES6 version you can use **;
//straight forward mathematical operations
const secondNum = 8 ** 2;
console.log(secondNum); //64

//Template Literals
// Allows to write strings without using the concatenation operator
// helps code readability

//pre-template literal string - before
let name = 'Rallion';
let message = "Hello" + "name" + "! Welcome to programming";

//String using template literals - with ES6
//uses backticks (``) and ${}

message = `Hello ${name}! Welcome to programming`;
console.log(`Message with template literals ${message}`);

//Multi-line using template literals
const anotherMessage = 
`
    ${name} attended a math competition.
    He won it by using the problem
    8**2 with the solution of 
    ${firstNum}.
`

console.log (anotherMessage);

//Template Literals allows us to write strings with embedded JavaScript expressions
//Expressions are any valid unit of code that resolves to a value.
//${} used to include JavaScript expression in strings using Template Literals

const interestRate = 1;
const principal = 1000;

console.log (`The interest on your savings account is ${principal * interestRate}`);

//Array Destructuring
//Allows to unpack elements in arrays into distinct variables
//Allows us to name array elements with variables instead of using index numbers
//code readability
//Syntax: let/const [variableName, variableName] = array

const fullName = ["Ben Francis", "Bertumen", "De Leon"];
const pet = ["Komodo Dragon", "Elder Dragon", "Nine Tails Fox"];

//Pre-Array Destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(pet[0]);
console.log(pet[1]);
console.log(pet[2]);

//convert the message using the values coming from array elements
console.log(`Hello firstName middleName lastName! It's nice to meet you!`);
//literally dictates the output based on the inputs given by the programmer.

//solution:
console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}!  It's nice to meet you!`);

//Using Array Destructuring starting in ES6
const [firstName, middleName, lastName] = fullName;

const [pet1,pet2, pet3] = pet;

//convert each elements into distinct variables
//Output is displayed based on the array values.
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log ( `Hello ${firstName} ${middleName} ${lastName}`);

console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);

//using destructuring array in a simple function

function introduce(){
    console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);
    console.log(`I have 3 pets! I have ${pet1}, ${pet2} and ${pet3}`);
}
introduce(); //invoke

//using array destructuring in a function (using parameters and an argument)
function introduce_2 (fn, mn, ln) {
    console.log(`Hi, my name is ${fn}, ${mn}, ${ln}`);
    console.log(`I have 3 pets! ${pet1}, ${pet2}, ${pet3}`);
}

introduce_2(firstName, middleName, lastName); //destructured array was invoke

//Object Destructuring
// allows to unpack properties of objects into distinct variables
// shortens syntax for accessing properties from objects
//syntax: let/const {propertyName, propertyName} = object

const peeps = {
    givenName: "Marco",
    midName: "Domingo",
    lName: "Lazaro"
}

//pre-Object destructuring
console.log(peeps.givenName);
console.log(peeps.middleName);
console.log(peeps.lastName);

//Object Destructuring
const {givenName, midName, lName} = peeps;
console.log(givenName);
// console.log(nickName); //undefined
//because NickName is not a property of an object

const intro = `${givenName} ${midName} ${lName}! It's good to see you!`;
console.log(intro);

//object in a function
function getFullName(personObject){
    console.log(personObject);//output the object properties
    console.log(`My name is ${personObject.givenName} ${personObject.midName} ${personObject.lName}`); //we use dot notation and ${} to call out the object properties with a customized displayed output
}
getFullName(peeps);

//destructuring an object inside the function
function getCompleteName({givenName, midName, lName})
{
    console.log(`My name is ${givenName} ${midName} ${lName}`);
}
getCompleteName(peeps);

//destructuring an object inside the function
function get_Fname (personObject) {
    console.log(personObject);
    const {givenName, midName, lName} = personObject; //parameter instead of the object name that was destructured earlier
    console.log(`My name is ${givenName} ${midName} ${lName}`);
}

get_Fname(peeps);

//Arrow Function
//compact alternate syntax to traditional function
//useful for snippets where creating functions will not be reused
//adheres to "DRY" method (Don't Repeat Yourself)
//SYNTAX: let/const variableName = () => {//function codeblock}

//arrow function with multiline codeblock
const hello = () => {
    console.log (`Hello`);//codeblock
}
hello();

//arrow function in one-line (w/o return keyword and curly braces)
const Hello = () => console.log(`Hello version 2`);
Hello();

//traditional function
function sayHello () {
    console.log(`Traditional function for Hello`);
}
sayHello();

//EXERCISES
//Instructions
/*
Destructure the array elements into distinctive variables.
Use an arrow function to introduce themselves.
Display it in the console. 
Given: let students = [“John”, “Jane”, “Judy”];

*/
//Sir Jericho's solution
let students = ['John', 'Jane', 'Judy'];
// const [s1, s2, s3] = students;

// const student = () => {
//     console.log ( `Hello ${s1} ${s2} ${s3}`);       
// }
// student();

//SOLUTION
const [student1, student2, student3] = students; //array destructure

const greeting = () => {
    console.log(`My name is ${student1}`);
    console.log(`My name is ${student2}`);
    console.log(`My name is ${student3}`);
}

greeting();

//Method 2: Using forEach
//Sir Regie's code
const greetings = (students) => {
    students.forEach((student) => {
        console.log(`Hi! My name is ${student}`);
    });
};

greetings(students);

students.forEach((student)=> console.log(`Haller ${student}`));

students.forEach(student => console.log(`Haller ${student}`));
//it is possible to use forEach even omiting the parenthesis in student

//Implicit Return Statement
//There are instances when you can omit the "return" statement
//Because even without the return statement JS implicitly adds it for the result of the function

//traditional function
function fName(){
    return 5*2
}
console.log(fName()); //returns the product result: 10

//function expression
//an anonymous function being stored in a variable
const fName2 = function() {
    return 3*2
}
console.log(fName2()); //returns the product result: 6

//arrow function with implicit return statement
//one-liner function without return and curly braces
const fName3 = () => 2*2
console.log(fName3()); //provided the product result: 4

//arrow function with explicit return statement
//multi-liner function code block with curly braces and return keyword

const fName4 = () => {
    return 2*9
}
console.log(fName4()); //returns the product result: 18

//Default function argument value
//provides a default argument value if none is provided when function is invoked.

const myName = (name = 'User') => {
    return `Good evening, ${name}`
}

console.log(myName());
console.log(myName("Rachel"));

//Class-Based Object Blueprints
//allows us to create or instantiate objects using classes as blueprints

/*
SYNTAX:
class ClassName {
    constructor (objectPropertyA, objectProperty B)
    {
        this.objectPropertyA = objectPropertyA;
        this.objectPropertyB = objectPropertyB;
    }
}
*/

//constructors - responsible for allocating (distributing) memory for objects of the class.
//function - represents "actions" that object/array can take
//function is also known as "methods"

class Car{
    constructor (brand, name, year) {
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}

//instantiate an object using "new" keyword + Car class
const myCar = new Car();
console.log (myCar);

//using assignment operator, assign the value to properties after instatiation of an object
myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;

console.log(myCar);

//instantiating a new object from the car class with initialized values
const myNewCar = new Car("Toyota", "Vios", 2021);
console.log(myNewCar);
