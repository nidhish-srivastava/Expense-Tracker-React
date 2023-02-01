import React, { useState } from "react"
import Expenses from "./Expenses/Expenses"
import NewExpense from "./NewExpenses/NewExpense"


function App() {

  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expense'))|| [])


  const itemHandler = (e) => {

    setExpense((event) => {
      return [e, ...event]
    })
  }
  const deleteExpenseHandler = (e) => {
    const n = expense.filter((arr, index) => index != e)
    setExpense(n)
  }

  console.log(expense)

  return (
    <React.Fragment>
      <NewExpense data={itemHandler} />
      <Expenses itemsArray={expense} deleteExpenseHandler={deleteExpenseHandler} />
    </React.Fragment>
  );
}

export default App;
