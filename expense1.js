function addExpense() {
    const amount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    if (amount && description && category) {
      const newRow = document.getElementById('expenseList').insertRow();
      const cellAmount = newRow.insertCell(0);
      const cellDescription = newRow.insertCell(1);
      const cellCategory = newRow.insertCell(2);
      const cellActions = newRow.insertCell(3);

      cellAmount.innerHTML = amount;
      cellDescription.innerHTML = description;
      cellCategory.innerHTML = category;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        newRow.remove();
      };


      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.onclick = function() {
        editExpense(newRow);
      };

      cellActions.appendChild(deleteButton);
      cellActions.appendChild(editButton);

      document.getElementById('expenseForm').reset();
    } 
    
    else {
      alert('Please fill in all fields.');
    }
  }




  function editExpense(row) {
    const cells = row.cells;
    const amount = cells[0].innerHTML;
    const description = cells[1].innerHTML;
    const category = cells[2].innerHTML;
  
    document.getElementById('expenseAmount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
  
    const addButton = document.getElementById('addButton');
    addButton.textContent = 'Update';
    addButton.onclick = function() {
      updateExpense(row);
    };
  }

