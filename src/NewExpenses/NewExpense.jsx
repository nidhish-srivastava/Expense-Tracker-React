import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const { itemHandler } = props;
  const [load, setLoad] = useState(false)

  const addEHandler = () => {
    setLoad(true)
  }

  const removeEHandler = () => {
    setLoad(false)
  }

  const output = (data) => {
    let expenseData = JSON.parse(localStorage.getItem('expense')) || []
    expenseData.push(data)
    itemHandler(expenseData)
    const saveData = JSON.stringify(expenseData);
    localStorage.setItem('expense', saveData);
  }
  
  return (
    <div className='new-expense'>
      {!load && <button onClick={addEHandler}>Add a Expense</button>}
      {load && <ExpenseForm output={output} onRemove={removeEHandler} />}
    </div>
  )
}

export default NewExpense