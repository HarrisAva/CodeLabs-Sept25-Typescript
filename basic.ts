//|| TypeScript data types **********

// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters


//Primitives

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types - arrays

let hobbies: string[];
hobbies = ['cooking', 'gardening'];

// object type

let person: {        // {} type assignment
    name: string;
    age: number;  
}

person = {
    name: 'Max',
    age: 30,
}

let people: {      // object arrays - use []
    name: string;
    age: number;
} [];


// Type inference

let course = 'React';  // no type assigned but it infers as string because 'React' is string
course = 123; // error - because type inference, 123 is not string


// Union types - multiple different types

let courses: string | number | boolean  // use '|' to assign multiple types
courses = 123; // no error

// **Alias type ***

let person2: {        // {} type assignment
    name: string;
    age: number;  
}

let people2: {      // object arrays - use []
    name: string;
    age: number;
} [];

// from above 2 objects with the same properties, create an alias type of 'Person' and use it as an array.

//**use 'type' to define alias data type, start with uppercase **

type Person = { 
    name: string;
    age: number;  
} 

let newPerson: Person[];


// Functions and types

function add(a: number, b: number) {
    return a + b;  // return type is infered from a and b, it will be number

}

function print(value: any) {
    console.log(value); // type is 'void' (null or underfined) because there is no output.
}

// Generics type - for flexibility and type safety

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array]; // use ...array for all arrays 
    return newArray;
}

const demoArray = [1,2,3];
const updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updateArray[0].split('');  // can't split number value but no error because it does not have array type defined

// from the above, use Generics function to define type of result/return value
 // define generic type using 'type name', e.g Gtype.

function insertAtBeginning2<Gtype> (array: Gtype[], value: Gtype) { 
    const newArray2 = [value, ... array];
    return newArray2;

}  
const demoArray2 = [1,2,3];
const updateArray2 = insertAtBeginning2(demoArray2, -1); // return result have generic type 'Gtype' due to inference
updateArray2[0].split(''); // show error because generic type is defined/known as Gtype (same as input). Can't split number.

// ***** Classes and Interfaces *******

// define a class with property and constructor, and create an object for the class to access the method in the class.

// create a class and define property with types, assign the value in constructor

class Student {  // in JS, no property is assigned. (It will add in contructor.)
    firstName: string; 
    lastName: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;  
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    } 

    enrol(courseName: string) {   // create method for this class *notice there is no 'function' keyword as in JS.

        this.courses.push(courseName); // add courseName into 'courses' constructor
    }
   
}
const student = new Student('Max', 'Robertson', 32, ['Angular']); // create an object outside class function.

student.enrol('React');  // call the method to enrol class 'React' to add to the courses list

student.courses  // return Angular, React


// ** set up Private variable in the class, can be access within the class only

class Instructor {  

    firstName: string; 
    lastName: string;
    age: number;
    private courses: string[];  // set this property to private property

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;  
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    } 

    teach(courseName: string) {   // create method for this class *notice there is no 'function' keyword as in JS.

        this.courses.push(courseName); // add courseName into 'courses' constructor
    }
   
    teachCourses () {
        return this.courses.slice(); 
        // return a copy of courses using 'slice' to make sure if it is called it won't alter the original 'this.courses = courses'
    }
}
const instructor = new Instructor('Kate', 'Smith', 30, ['JavaScript']); // create an object outside class function.

instructor.teach('HTML/CSS');  // call the method to enrol class 'React' to add to the courses list

instructor.courses  // got error because it can't be accesses outside the class.

// use below to access the priviate property value

instructor.teachCourses();  // JavaScript, HTML/CSS


// ** a shorthand to define a class above **


class Instructor2 {  

    // firstName: string; 
    // lastName: string;
    // age: number;
    // private courses: string[];  

    constructor(

    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]

    ) {}
    
    }


// Interface - object type definition with method(s) that can be called by classes.
    // Every call made to the interface must have the exact property and call the method(s) in the interface.
    // ** this is to standardize the object structure and to force to call method(s) in the interface ** (same as Angular)
    // (it is not only the object, but it forces the have the same structure and call all methods in the interface)
    // - only use in TypeScript, not JavaScript

interface Human {
    firstName: string;
    age: number;

    greet: () => void;  
    // every human must have greet method with no parameter and return nothing
}

// example call to the interface

let max: Human;
max = {
    firstName: 'Max',
    age: 32,

    greet() {
        console.log('Hello');
    },
};


// example of class calling the interface using 'implements' keyword.

class NewInstructor implements Human {  
    
    // must have the same properties and method as the interface 'Human'

    firstName: string;
    age: number;

    greet() {
        console.log ('Hello students');
    }
}

// running typescript 
    // install process:
        // npm init -y
        // npm install typescript - need to be in the project directory
        // Or, to install for all project: npm install -g typescript
    //run typescript command: npx tsc filename.ts
    // *configuring the typescript using npx command: tsc --init










