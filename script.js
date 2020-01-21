// Function Constructor

let john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

let mark = new Person("Mark", 1984, "teacher");
var jane = new Person("Jane", 1969);

mark.calculateAge();
jane.calculateAge();

console.log(mark.lastName, jane.lastName);
