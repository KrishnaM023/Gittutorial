const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const USERLIST = document.querySelector('#users');
let arr = []; // Initialize the array globally

document.addEventListener('DOMContentLoaded', () => {
  getStoredUserData();
});

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const userData = { name: nameInput.value, email: emailInput.value };

    if (!Array.isArray(arr)) {
      arr = [];
    }

    if (!userData._id) {
      // If _id is not present, it's a new user, so perform POST operation
      axios
        .post("https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata", userData)
        .then((response) => {
          showNewUserOnScreen(response.data);
        })
        .catch((err) => {
          document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
          console.log(err);
        });
    } else {
      // If _id is present, it's an existing user, so perform PUT operation
      axios
        .put(`https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata/${userData._id}`, userData)
        .then(() => {
          updateList();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    nameInput.value = '';
    emailInput.value = '';
  }
}

function updateList() {
  USERLIST.innerHTML = '';

  arr.forEach((userData, index) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${userData.name} : ${userData.email}`));

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      editUserData(index);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteUserData(userData._id, index);
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    USERLIST.appendChild(li);
  });
}

function getStoredUserData() {
  axios
    .get("https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata")
    .then((response) => {
      arr = response.data;
      updateList();
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteUserData(userId, index) {
  axios
    .delete(`https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata/${userId}`)
    .then(() => {
      arr.splice(index, 1);
      updateList();
    })
    .catch((err) => {
      console.log(err);
    });
}

function editUserData(index) {
  const userData = arr[index];
  nameInput.value = userData.name;
  emailInput.value = userData.email;

  // Set the _id property in the userData object so that it will be treated as an existing user during form submission
  nameInput.userDataId = userData._id;

  // Change the form submit button text to indicate editing
  myForm.querySelector('button[type="submit"]').innerText = 'Edit User';

  myForm.addEventListener('submit', function onEditSubmit(e) {
    e.preventDefault();

    // Update the userDataArray with the edited data
    userData.name = nameInput.value;
    userData.email = emailInput.value;

    if (userData._id) {
      // If _id is present, it's an existing user, so perform PUT operation
      axios
        .put(`https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata/${userData._id}`, userData)
        .then(() => {
          updateList();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // Clear the form fields and reset the form submit button text
    nameInput.value = '';
    emailInput.value = '';
    nameInput.userDataId = null;
    myForm.querySelector('button[type="submit"]').innerText = 'Add User';

    // Remove the temporary event listener
    myForm.removeEventListener('submit', onEditSubmit);
  });
}

function showNewUserOnScreen(user) {
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  updateList();
}
