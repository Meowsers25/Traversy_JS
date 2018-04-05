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