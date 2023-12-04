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

var item = document.getElementsByClassName('list-group-item');
console.log(items);
items.style.fontWeight = 'bold';
item[1].textContent = 'Hello 2';
item[1].style.fontWeight = 'bold';
item[1].style.color = 'green';
item[2].style.backgroundColor = 'green';

// This will Gives Error
//items.style.backgroundColor = '#f4f4f4';

/*for(let i = 0; i < items.length; i++){
    items[1].style.backgroundColor = '#f4f4f4';
}*/


