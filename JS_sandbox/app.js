// alert('Hello World');

// document.querySelector('h1').style.color="red";

// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = "Hi";
// console.log(greeting);
// console.log([1, 2, 3, 4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});
// console.error('This is an error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
// console.timeEnd('Hello');

// var name = 'Jon Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //letters, numbers, _, $
// //Can't start with a number
// // multi word vars use camelCase
// var firsrName;

//let
// let name = 'Jon Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//const
// const name = 'John';
// console.log(name);
//cant reassign
// name = 'Sara';

//have to assign a value
// const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }
// console.log(person);
// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

//PRIMITIVE

//string
// const name = 'John Doe';
// console.log(typeof name);

// //number
// const age = 43;
// console.log(typeof age);

// //boolean
// const yeah = true;
// console.log(typeof yeah);

// //null
// const car = null;
// console.log(typeof car);

// //undefined
// let egg;
// console.log(typeof egg);

// //symbol
// const sym = Symbol();
// console.log(typeof sym);

// //REFERENCE TYPES - objects
// //Array
// const hobbies = ['surfing', 'bleh'];
// console.log(typeof hobbies);

// //Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// console.log(typeof address);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

//type conversion
//number to string
// let val;
// val = String(5);
// val = String(4+4);
// //bool to string
// val = String(true);
// //date to string
// val = String(new Date());
// //array to string
// val = String([1,2,3,4]);
// //can also use .toString()
// val = (88).toString();

// //string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('Hello');
// //can also use parseInt();
// val = parseInt('100.30');//no decimals
// val = parseFloat('100.30');//decimals

// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed());

// //type coercion
// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

//simple math with numbers
// 

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 28;
// const str = 'Hello there my name is Chris';
// const tags = 'web dev,cyber security,full stack';

// let val;

// val = firstName + lastName;
// //concatenation
// val = firstName + ' ' + lastName;
// //append
// val = 'Chris ';
// val += 'Lamothe';

// val = 'Hello my name is ' + firstName + ' and I am ' + age + ' years old.';

// //escaping
// val = 'That\'s awesome, I can\'t wait';

// //length is a property, so you don't need the //paren like a method
// val = firstName.length;

// //concat()
// val = firstName.concat(' ', lastName);

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// //indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');

// //get last char
// val = firstName.charAt(firstName.length-1);

// //substring()
// val = firstName.substring(0, 4);

// //slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// //split
// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('Chris', 'Luna');

// //includes
// val = str.includes('foo');

// console.log(val);

// const name = 'John';
// const age = 26;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// //without template strings
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// function hello(){
//   return 'hello';
// }
// //with template literals
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${hello()}</li>
//     <li>${11 % 2}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
// `;

// document.body.innerHTML = html;

//create arrays
// const numbers = [43,56,33,23,44,36,5];
// //array constructor
// const numbers2 = new Array(22,34,36,78);
// const fruit = ['apple', 'pear', 'orange', 'banana'];
// const mixed = [1, 'hi', true, undefined, new Date()];

// // console.log(mixed);
// let val;
// //array length
// val = numbers.length;
// //is array?
// val = Array.isArray(numbers);//array obj
// //get single value
// val = numbers[3];
// //insert into array
// numbers[2] = 100;
// //find index of value
// val = numbers.indexOf(36);
//mutating arrays
// //add on to end
// numbers.push(250);
// //add on to front
// numbers.unshift(120);
// //take off from end
// numbers.pop();
// //take off from beginning
// numbers.shift();
// //splice out values
// numbers.splice(1, 3);
// //reverse
// numbers.reverse();

//concatenate array
// val = numbers.concat(numbers2);
// //sort
// val = fruit.sort();
// val = numbers.sort();
// //use the 'compare function'
// val = numbers.sort(function(x, y){
//   return x-y;
// });
// //reverse sort
// val = numbers.sort(function(x, y){
//   return y-x;
// });
// //find
// function under50(num){
//   return num < 50;
// }
// val = numbers.find(under50);
// console.log(numbers);
// console.log(val);

//object literals
// const person = {
//   firstName: 'Chris',
//   lastName: 'Smith',
//   age: 30,
//   email: 'rocker@bbd.com',
//   hobbies: ['music', 'sports'],
//   address: {//embedded obj
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function(){
//     return 2018 - this.age;//this pertains to obj
//   }
// }
// let val;
// val = person;
// //get specific value
// val = person.firstName;//dot notation
// val = person['firstName'];//bracket notation
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;//dot
// val = person['address']['city'];//bracket
// val = person.getBirthYear();
// console.log(val);

// const people = [
//   {name: 'Mike', age: 22},
//   {name: 'John', age: 44},
//   {name: 'Nancy', age: 54}
// ];
// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }

// let val;

// const today = new Date();
// const birthday = new Date();
// val = today.getMonth();//0 based
// val = today.getDate();
// val = today.getDay();//0 based starting Sun
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();//amount of seconds since 1/1/1970
// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);