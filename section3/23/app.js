//document.getElementById()
//get things from the element ie .id, .className,

// console.log(document.getElementById('task-title'));

//change styling
// document.getElementById('task-title').style.background = 'red';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

//change content
//a better way of doing this is to put in variable:

// const taskTitle = document.getElementById('task-title');

// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My tasks';
// taskTitle.innerHTML = '<span>Task List</span>';

//document.querySelector() .classes, and elements h5

// console.log(document.querySelector('#task-title'));

// document.querySelector('li').style.color = 'red';//only styles first li

// document.querySelector('li:last-child').style.color = 'blue';//last li

// document.querySelector('li:nth-child(3)').style.color = 'yellow';//specified li

// document.querySelector('li:nth-child(4)').textContent = 'Hello World';//last li


//DOM selectors for multiple elements
//getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

//getElementsByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World';

// //convert HTML Collection into an array

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index} Hello`;
// })
// console.log(lis);

//document.querySelectorAll()

const items = document.querySelectorAll('li');

//.forEach can be used without having to convert to array because of .querySelectorAll
items.forEach(function(item, index){
  item.textContent = `${index} Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = 'blue';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = 'yellow';
};

console.log(items);




