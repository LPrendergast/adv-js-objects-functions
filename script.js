// Function Constructor

// let john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher"
// };

// let Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";

// let mark = new Person("Mark", 1984, "teacher");
// var jane = new Person("Jane", 1969);

// mark.calculateAge();
// jane.calculateAge();

// let personProto = {
//   calculateAge: function() {
//     console.log(2020 - this.yearOfBirth);
//   }
// };
// var john = Object.create(personProto);
// john.name = "john";
// john.yearOfBirth = 1990;
// john.job = "teacher";
// john.calculateAge();

// var jane = Object.create(personProto, {
//   name: { value: "Jane" },
//   yearOfBirth: { value: 1969 },
//   job: { value: "designer" }
// });

// let years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   let arrResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     arrResult.push(fn(arr[i]));
//   }
//   return arrResult;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function calculateAge(el) {
//   return 2020 - el;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - 0.67 * el);
//   } else {
//     return -1;
//   }
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages, fullAges, rates);
