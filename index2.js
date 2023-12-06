const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const USERLIST = document.querySelector('#users');
let userDataArray = getStoredUserData(); // Initialize userDataArray globally
let arr = Array.from(userDataArray);



  document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('userData');
  
    if (storedData) {
      arr = JSON.parse(storedData); // Assign the parsed array to the global variable
      updateList(arr);
    }

    arr.forEach(({ name, email }) => {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${name} : ${email}`));
      USERLIST.appendChild(li);
    });
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

        // Retrieve existing data from localStorage or initialize an empty array
        const storedData = localStorage.getItem('userData');
        const userDataArray = storedData ? JSON.parse(storedData) : [];
        
        

        // Add new data to the array
        const userData = { name: nameInput.value, email: emailInput.value };

        if (!Array.isArray(arr)) {
          // If it's not an array, initialize it as an empty array
          arr = [];
        }
        arr.push(userData);
        
        // Save the updated array back to localStorage
        localStorage.setItem('userData', JSON.stringify(arr));
        // Display the updated list
        updateList(userDataArray);

        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

function updateList(userDataArray) {
    // Clear the existing list
    USERLIST.innerHTML = '';
  
    // Display the updated list

      arr.forEach((userData, index) => {
        const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${userData.name} : ${userData.email}`));

      // Add Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        editUserData(index);
      });


      // Add a delete button
      const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
        deleteUserData(index);
        updateList(userDataArray);
      });
    
      li.appendChild(editButton);  
      li.appendChild(deleteButton);

      USERLIST.appendChild(li);
    });
  }

function getStoredUserData() {
  const storedData = localStorage.getItem('userData');
  return storedData ? JSON.parse(storedData) : [];
}


function deleteUserData(index) {
  userDataArray.splice(index, 1);
  localStorage.setItem('userData', JSON.stringify(userDataArray));
}

function editUserData(index) {
  const userData = arr[index];
  nameInput.value = userData.name;
  emailInput.value = userData.email;

  
  // Handle the edit operation when the form is submitted
  myForm.addEventListener('submit', function onEditSubmit(e) {
    e.preventDefault();

    // Update the userDataArray with the edited data
    arr[index] = { name: nameInput.value, email: emailInput.value };

    // Save the updated array back to local storage
    localStorage.setItem('userData', JSON.stringify(arr));

    // Update the displayed list
    updateList(arr);
    updateList(USERLIST);


    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';

    // Remove the temporary event listener
    myForm.removeEventListener('submit', onEditSubmit);
  });
}
