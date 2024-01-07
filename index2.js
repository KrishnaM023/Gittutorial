const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const USERLIST = document.querySelector('#users');
let arr = [];

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

    axios
      .post("https://crudcrud.com/api/551361f523c14cee9a512d8c78f05479/appointmentdata", userData)
      .then((response) => {
        showNewUserOnScreen(response.data);
      })
      .catch((err) => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
        console.log(err);
      })

    nameInput.value = '';
    emailInput.value = '';
  }
}

function updateList() {
  USERLIST.innerHTML = '';

  arr.forEach((userData, index) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${userData.name} : ${userData.email}`));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteUserData(userData._id, index);
    });

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

function showNewUserOnScreen(user) {
  document.getElementById('name').value = user.name;
  document.getElementById('email').value = user.email;
  updateList();
}
