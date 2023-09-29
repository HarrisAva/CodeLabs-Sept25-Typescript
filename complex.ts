// Complex types

// Arrays

let students: string[];
students = ['Quin', 'Betty', 'Mary'];
let mixedBag: any[];
mixedBag = [2, 'Hello', false];

// Objects

let student: {
    name: string;
    age: number;
    isStudent: boolean;
};

student = {
    name: 'James',
    age: 30,
    isStudent: true
};

// Type inference & Unions
let course = 'Codifi Coding Bootcamp';
course = 123 // type inference causes an error

let bootcamp: string | number;
bootcamp = 'Codefi Coding Bootcamp';
bootcamp = 123; // no error

// Type Aliases

type CodefiPerson = {
    name: string;
    age: number;
    isStudent: boolean;

};

let randomStudent: CodifiPerson = {
    name: 'James',
    age: 33,
    isStudent: true
};

let currCodeCoach: CodefiPerson = {
    name: 'Chris',
    age: 55,
    isStudent: false
};

// Functions & Parameters

function add (a: number, b: number): number {
    return a + b;
}

function printName (name: string): void {
    console.log(name);
};

// Typescript Generics

function getId<Type>(value: Type): Type {
    return value;
}
 let userOneId = getId<String>("stringId_userOne");
 let userTwoId = getId<Number>(34);
 let userThreeHasId = getId,Boolean.(true);

 //When do you want to use Generics?
// What is one "real life" use-case for Generics? (You may need to look this one up!)


// * CLASSES & INTERFACES START * \\
class Student implements StudentInterface {
    constructor(
      public first: string,
      public last: string,
      private courses: string[]
    ) {}
  
    enroll(courseName: string) {
      this.courses.push(courseName);
    }
  
    listCourses() {
      return this.courses.slice();
    }
  }
  
  const studentOne = new Student("Will", "Wilder", ["Codefi Front-End Bootcamp"]);
  studentOne.enroll("Codefi Back-End Bootcamp");
  
  // studentOne.courses
  studentOne.listCourses();
  
  console.log("studentOne:", studentOne);
  // CLASSES & INTERFACES END \\

  interface StudentInterface {
    first: string;
    last: string;
    enroll: (courseName: string) => void;
    listCourses: () => string[];
  }

  // What is the difference between "Type Aliases" and "Type Interfaces"?