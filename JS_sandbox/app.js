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

// let
// let name = 'Jon Doe';
// console.log(name);
// // name = 'Steve Smith';
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

// if(something) {
// 	do something;
// } else {
// 	do something else;
// }

// const id = 100;

//equal to
// if (id == 100){
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

//not equal to
// if (id != 101){
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// //equal to value and type
// if (id === 100){
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// //not equal to value and type
// if (id !== 100){
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

// if(id){
// 	console.log(`The ID is ${id}`);
// } else {
// 	console.log('No ID');
//}

//test if undefined
// if(typeof id !== 'undefined') {
// 	console.log(`The ID is ${id}`);
// } else {
// 	console.log('No ID');
// }

//greater or less than
// if(id <= 100) {
// 	console.log('correct');
// } else {
// 	console.log('incorrect');
// }

//if else
// const color = 'yellow';
// if(color === 'red'){
// 	console.log('Color is red');
// }else if (color === 'blue'){
// 	console.log('Color is blue');
// }else{
// 	console.log('Color is not red or blue');
// }

//logical operators
// const name = 'Steve';
// const age = 17;

//and &&
// if(age > 0 && age < 12){
// 	console.log(`${name} is a child`);
// }else if(age >= 13 && age <= 19){
// 	console.log(`${name} is a teenager`);
// }else{
// 	console.log(`${name} is an adult`);
// }

// //or ||
// if(age < 16 || age > 65){
// 	console.log(`${name} can not enter the race`);
// }else{
// 	console.log(`${name} can enter the race`);
// }

// //ternary operator
// console.log(id === 100 ? 'correct' : 'incorrect');

// //without curly braces
// if(id === 100)
// 	console.log('correct');
// else
// 	console.log('incorrect');

//switches
// const color = 'orange';

// switch(color){
// 	case 'red':
// 		console.log('Color is red');
// 		break;
// 	case 'blue':
// 		console.log('color is blue');
// 		break;
// 	case 'yellow':
// 		console.log('Color is yellow');
// 		break;
// 	default:
// 		console.log('Color is not red blue or yellow');
// 		break;
// }

// let day;

// switch(new Date().getDay()){
// 	case 0:
// 		day = 'Sunday';
// 		break;
// 	case 1:
// 		day = 'Monday';
// 		break;
// 	case 2:
// 		day = 'Tuesday';
// 		break;
// 	case 3:
// 		day = 'Wednesday';
// 		break;
// 	case 4:
// 		day = 'Thursday';
// 		break;
// 	case 5:
// 		day = 'Friday';
// 		break;
// 	case 6:
// 		day = 'Saturday';
// 		break;
// }
// console.log(`Today is ${day}`);

//function declarations
// function greet(){
// 	// console.log('Hello');
// 	return 'Hello'
// }
// console.log(greet());

// function greet(firstName){ //parameter
// 	return 'Hello ' + firstName;
// }
// console.log(greet('Luna'));//'luna' is argument


//function expression putting a function as a variable assignment
// const square = function(x){ //usually ananymous
// 	return x * x;
// };//semi colon because its a variable
// console.log(square(8));

//immediately invokable function expressions - IIFE's
// (function(){
// 	console.log('IIFE ran...');
// })();

// (function(x, y){
// 	console.log(x * y);
// })(3, 2);

//property methods

// const todo = {
// 	add: function(){
// 		console.log('Add todo...');
// 	},
// 	edit: function(id){
// 		console.log(`Edit todo ${id}`);
// 	}
// }
// //can define functions for object outside
// todo.delete = function(){
// 	console.log('Delete todo.....')
// }
// todo.add();
// todo.edit(25);
// todo.delete();6

//for loop

// for(let i = 0; i < 10; i++){ //declaration of var;condition;iteration
// 	// console.log(i);
// 	if(i === 2){
// 		console.log('2 is my favorite number');
// 		continue;//stops loop and goes to next iteration
// 	}
// 	if(i === 5){
// 		console.log('Stop the loop');
// 		break;
// 	}
// 	console.log('Number ' + i);
// }

//while loop

// let i = 0;

// while(i < 10){
// 	console.log('Number ' + i);
// 	i++;
// }

//do while loop

// let i = 0;

// do {
// 	console.log('Number ' + i);
// 	i++;
// }

// while(i < 10);


//loop through array
 // const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
// 	console.log(cars[i]);
// }

//.forEach - same as above
// cars.forEach(function(car, index, array){
// 	console.log(`${index} : ${car}`);
// 	console.log(array);
// });

//map
// const users = [
// 	{id:1, name:'John'},
// 	{id:2, name:'Sara'},
// 	{id:3, name:'Karen'}
// ];

// const ids = users.map(function(user){
// 	return user.id;
// });
// console.log(ids);

//for in loop
// const user = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	age: 40
// }

// for(let x in user){
// 	console.log(`${x} : ${user[x]}`);
// }

//window methods / objects/ properties

// console.log(123);

//alert
// window.alert('Hello world');

//prompt
// const input = prompt();
// alert(input);

//confirm
// if(confirm('Are you sure')){
// 	console.log('yes');
// }else{
// 	console.log('no');
// }

// let val;

// //outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// //inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// //scroll points
// val = window.scrollY;
// val = window.scrollX;

// //location object
// val = window.location;
// val = window.location.href;

// //redirect
// // window.location.href = 'http://google.com';

// //reload
// // window.location.reload();

//history object
//window.history.go(-2);
//val = window.history.length;

//navigator object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;


//  console.log(val);

//global scope
// var a = 1;
// let b = 2;
// const c = 3;


// function test(){
// 	var a = 4;
// 	let b = 5;
// 	const c = 6; 
// 	console.log('Function scope: ',a,b,c);
// }
// test();
	
// if(true){
// 	//block scope
// 	var a = 4;//check this out!
//  	let b = 5;
//  	const c = 6; 
//  	console.log('If scope: ',a,b,c);
// }

// for(let a = 0; a < 10; a++){ //use let! try var
// 	console.log(`Loop : ${a}`);
// }
// console.log('Global scope ',a,b,c);
