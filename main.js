var Student4 = /** @class */ (function () {
    function Student4(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    Student4.prototype.enrol = function (courseName) {
        this.courses.push(courseName); // add courseName into 'courses' constructor
    };
    return Student4;
}());
var newStudent = new Student4('Max', 'Robertson', 32, ['Angular']); // create an object outside class function.
newStudent.enrol('React'); // call the method to enrol class 'React' to add to the courses list
newStudent.courses; // return Angular, React
// console.log(student.firstName, student.courses);
