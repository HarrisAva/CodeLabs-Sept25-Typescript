// Primitive types: string, number, boolean

let username: string;
username ='';
username='123';
username='Will_Wilder';

let isInstructor: boolean;

isInstructor=false;
isInstructor=true;

// Array & object types





class Student4 {  // in JS, no property is assigned. (It will add in contructor.)
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
const newStudent = new Student4('Max', 'Robertson', 32, ['Angular']); // create an object outside class function.

newStudent.enrol('React');  // call the method to enrol class 'React' to add to the courses list

newStudent.courses  // return Angular, React
// console.log(student.firstName, student.courses);

let numOfStudents: number;
numOfStudents =2;
