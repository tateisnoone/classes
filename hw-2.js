// Implement the class **Student** that extends the class **User**. This class has to have next properties:

// - **name** (extends from User)
// - **surname** (extends from User)
// - **year** (year of admission) ( if passed less than 2018, throw an error )

// This class has to have next methods:

// - method **getFullName()** (extends from User). Using this class we can get name and surname together.
// - method **getCourse()** that returns current course (from 1 to 4). To calculate it: need to subtract from current year the year of admission.

// Example:

// ```javascript
// var student = new Student("John", "Smith", 2018);

// console.log(student.name); // print 'John'
// console.log(student.surname); // print 'John'
// console.log(student.getFullName()); // print 'John Smith'
// console.log(student.year); // print 2018
// console.log(student.getCourse()); // print 4 - fourth course, because current year 2022
// ```

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + " " + this.surname;
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
    if (this.year < 2020) {
      throw new Error("Year must be more than 2020");
    }
  }

  getCourse() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var courseYear = currentYear - this.year;
    return courseYear;
  }
}

var student = new Student("John", "Smith", 2021);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());
