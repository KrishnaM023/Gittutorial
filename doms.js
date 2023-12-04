// Examine the Document Object

//console.log(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// Get-Element-By-Id

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.timeLog(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.timeLog(headerTitle.innerText);
//headerTitle.textContent = '<h3>Hello</h3>';
//headerTitle.innerText = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

// Get-Element-By-ClassName

// var item = document.getElementsByClassName('list-group-item');
// console.log(items);
// items.style.fontWeight = 'bold';
// item[1].textContent = 'Hello 2';
// item[1].style.fontWeight = 'bold';
// item[1].style.color = 'green';
// item[2].style.backgroundColor = 'green';


// var li = document.getElementsByClassName('li');
// console.log(li);
// li.style.fontWeight = 'bold';
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.color = 'green';
// li[2].style.backgroundColor = 'green';


// This will Gives Error
//items.style.backgroundColor = '#f4f4f4';

/*for(let i = 0; i < items.length; i++){
    items[1].style.backgroundColor = '#f4f4f4';
}*/

// Query-Selector
/*
var header = document.querySelector('#main-header');
header.style.backgroundColor = 'solid 5px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
*/


// Query-Selector-All

/*
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var secondItem = document.querySelectorALL('.li:nth-child(2)');
secondItem.style.color = 'black';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; odd.length; i++){
    odd[i].style.backgroundcolor = 'green';
}

*/


// Traversing the DOM
var itemList = document.querySelector('#items');
/*
// Parent-Node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundcolor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// Parent-Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
*/

/*
// Child-Nodes
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundcolor = 'yellow';

// First-Child
console.log(itemList.firstChild);

// First-Element-Child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';

// Last-Child
console.log(itemList.lastChild);

// Last-Element-Child
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';
*/

/*
// Next-Siblings
console.log(itemList.nextSibling);

//Next-Element-Sibling
console.log(itemList.nextElementSibling);

// Previous-Sibling
console.log(itemList.previousSibling);

// Previous-Element-Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
*/

// Create-Element

// Create Div
var newDiv = document.createElement('div');

// Add-Class
newDiv.className = 'hello';

// Add-Id
newDiv.id = 'hello1';

// Add-Atribute
newDiv.setAttribute('title', 'Hello Div');

// Create text Node
var newDivText = document.createTextNode('Hello World!');

//Add text to Div
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);





