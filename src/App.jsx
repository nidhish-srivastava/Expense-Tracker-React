import React, { useState } from "react"
import Expenses from "./Expenses/Expenses"
import NewExpense from "./NewExpenses/NewExpense"


function App() {

  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expense')) || [])


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
      <NewExpense itemHandler={itemHandler} />
      <Expenses itemsArray={expense} deleteExpenseHandler={deleteExpenseHandler} />
    </React.Fragment>
  );
}

export default App;
