import React, { useState } from "react"
import Expenses from "./Expenses/Expenses"
import NewExpense from "./NewExpenses/NewExpense"


function App() {

  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expense')) || [])
  
  
const sum = expense.reduce((accumulator,object)=>{
     return Number(Number(accumulator)+Number(object.amount))
},0)

console.log(sum)




  const itemHandler = (data) => {
    setExpense(data)
  }
  const deleteExpenseHandler = (e) => {
    const n = expense.filter((arr, index) => index != e)

    setExpense(n)
    const saveData = JSON.stringify(n);
    localStorage.setItem('expense', saveData);
  }

  console.log(expense)

  return (
    <React.Fragment>
          <span className="bill">Total : ₹{sum}</span>

      <NewExpense itemHandler={itemHandler} />
      <Expenses itemsArray={expense} deleteExpenseHandler={deleteExpenseHandler} />
    </React.Fragment>
  );
}

export default App;
