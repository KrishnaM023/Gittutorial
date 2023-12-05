const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const USERLIST = document.querySelector('#users');


document.addEventListener('DOMContentLoaded', () => {
    /*const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
  
    if (storedName && storedEmail) {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${storedName} : ${storedEmail}`));
      USERLIST.appendChild(li);
    }*/

    // Using JSON.stringfy and JSON.parse
    const storedData = localStorage.getItem('userData');

    if (storedData) {
        const { name, email } = JSON.parse(storedData);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name} : ${email}`));
        USERLIST.appendChild(li);
    }
  });

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }

    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));

        USERLIST.appendChild(li);

        // Save to Local Storage
        //localStorage.setItem('name', nameInput.value);
        //localStorage.setItem('email', emailInput.value);

        const userData = { name: nameInput.value, email: emailInput.value };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}