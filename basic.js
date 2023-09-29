// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types - arrays
var hobbies;
hobbies = ['cooking', 'gardening'];
// object type
var person;
person = {
    name: 'Max',
    age: 30,
};
var people;
// Type inference
var course = 'React'; // no type assigned but it infer as string because 'React' is string
course = 123; // error - because type inference
// Union types - multiple different types
var courses; // use '| '
courses = 123;
// **Type alias***
var person2;
var people2;
var people3;
// Functions and types
function add(a, b) {
    return a + b; // return type is infered from a and b
}
function print(value) {
    console.log(value); // type is 'void' (null or underfined) because there is no output.
}
// Generics type - for flexibility and type safety
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updateArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
updateArray[0].split(''); // can't split number value but no error because it does not have array type defined
// from the above, use Generics function to define type of result/return value
// define generic type using <'typename'.
function insertAtBeginning2(array, value) {
    var newArray2 = __spreadArray([value], array, true);
    return newArray2;
}
var demoArray2 = [1, 2, 3];
var updateArray2 = insertAtBeginning2(demoArray2, -1); // return result with generic type 'Gtype'
updateArray2[0].split(''); // show error because generic type is defined/known the same as input type (Gtype)
// Classes and Interfaces
// define a class with property and constructor, and create an object for the class to access the method in the class.
// create a class and define property with types, assign the value in constructor
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName); // add courseName into 'courses' constructor
    };
    return Student;
}());
var student = new Student('Max', 'Robertson', 32, ['Angular']); // create an object outside class function.
student.enrol('React'); // call the method to enrol class 'React' to add to the courses list
student.courses; // return Angular, React
// ** set up Private variable in the class, can be access within the class only
var Instructor = /** @class */ (function () {
    function Instructor(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Instructor.prototype.teach = function (courseName) {
        this.courses.push(courseName); // add courseName into 'courses' constructor
    };
    Instructor.prototype.teachCourses = function () {
        return this.courses.slice();
        // return a copy of courses using 'slice' to make sure if it is called it won't alter the original 'this.courses = courses'
    };
    return Instructor;
}());
var instructor = new Instructor('Kate', 'Smith', 30, ['JavaScript']); // create an object outside class function.
instructor.teach('HTML/CSS'); // call the method to enrol class 'React' to add to the courses list
instructor.courses; // got error because it can't be accesses outside the class.
// use below to access the priviate property value
instructor.teachCourses(); // JavaScript, HTML/CSS
// ** a shorthand to define a class above **
var Instructor2 = /** @class */ (function () {
    // firstName: string; 
    // lastName: string;
    // age: number;
    // private courses: string[];  
    function Instructor2(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    return Instructor2;
}());
// example call to the interface
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello');
    },
};
// example of class calling the interface using 'implements' keyword.
var NewInstructor = /** @class */ (function () {
    function NewInstructor() {
    }
    NewInstructor.prototype.greet = function () {
        console.log('Hello students');
    };
    return NewInstructor;
}());
// running typescript 
// install process:
// npm init -y
// npm install typescript - need to be in the project directory
// Or, to install for all project: npm install -g typescript
//run typescript: npx tsc filename.ts
// *configuring the typescript using npx tsc --init
