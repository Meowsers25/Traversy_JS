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

console.log(document.querySelector('#task-title'));

document.querySelector('li').style.color = 'red';//only styles first li

document.querySelector('li:last-child').style.color = 'blue';//last li

document.querySelector('li:nth-child(3)').style.color = 'yellow';//specified li

document.querySelector('li:nth-child(4)').textContent = 'Hello World';//last li







