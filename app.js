{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}

const expenseInput = document.querySelector('#expense');
const dateInput = document.querySelector('#dateInput');
const amountInput = document.querySelector('#amountInput');
const addExpenseBtn = document.querySelector('#addBtn');
const tBody = document.querySelector('#tbody');
const remove = document.querySelector('#remove');
const tableHead = document.querySelector('#thead');




const expenseTracker = [];
const expenseTotalSelector = document.querySelector('#expenseTotal'); 




{/* <td class="noExpense" colspan="5">No expense Added</td> */}
// const noExpenseAdded = () => {
//     const tr = document.createElement('tr');
//     tr.classList.add('tr');
//     const createNoExpense = document.createElement('td');
//     createNoExpense.classList.add('noExpense');
//     createNoExpense.colSpan = "5";
//     createNoExpense.innerText = 'No expense added yet!'
//     tr.appendChild(createNoExpense)
//     tBody.appendChild(tr);
    
//   }

     



addExpenseBtn.addEventListener(('click'), function(e) {
    e.preventDefault();
    createRow();

    const totalExpense = expenseTracker.reduce((acc,curr) =>{
        return acc.amount + curr.amount;
    })
    expenseTotalSelector.innerText = totalExpense();
    
     
})

tBody.addEventListener(('click'), function(e){
    e.preventDefault();
    if(e.target.nodeName === 'BUTTON' ){
        e.target.parentElement.parentElement.remove();
        
        }
        

 
})



const createRow = () => { 
    const expenseTrackerObject = {};
    const row = document.createElement('tr');
    row.classList.add('tr');
    
    
    createExpense( row,expenseTrackerObject);
    createDate( row,expenseTrackerObject);
    createAmount( row,expenseTrackerObject);
    createRemove(row,expenseTrackerObject);
    tBody.append(row);
   expenseTracker.push(expenseTrackerObject);

}








const createExpense = (row,expenseTrackerObject) => {
    const expenseTd = document.createElement('td');
    expenseTd.innerText = expenseInput.value;
    expenseTrackerObject.expense = expenseInput.value
    row.append(expenseTd);

}

const createDate = (row,expenseTrackerObject) => {
    const dateTd = document.createElement('td');
    dateTd.innerText = dateInput.value;
    expenseTrackerObject.date = dateInput.value;
    row.append(dateTd);
}

const createAmount =(row,expenseTrackerObject) => {
    const amountTd = document.createElement('td');
    amountTd.innerText = `$${amountInput.value}`;
    expenseTrackerObject.amount = parseInt(amountInput.value);
    row.append(amountTd);
}



const createRemove = ( row,expenseTrackerObject) => {
    
  
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn','btn-danger');
    removeBtn.innerText = 'X';
  
    const removeTd = document.createElement('td');
    removeTd.append(removeBtn);
    row.append(removeTd);
    
    
}







  