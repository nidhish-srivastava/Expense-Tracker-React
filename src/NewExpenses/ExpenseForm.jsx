import React,{useState} from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

  const [enteredTitle,setEnteredTitle] = useState('')
  const [enteredDate,setEnteredDate] = useState('')
  const [enteredAmount,setEnteredAmount] = useState('')

  
  const formSubmitHandler = (event) =>{
    event.preventDefault()

    if(enteredAmount && enteredDate && enteredTitle){
      const obj = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        // id: Math.random().toString()
      }
  
      props.output(obj)

      setEnteredAmount('')
      setEnteredDate('')
      setEnteredTitle('')
    }
  }




  return (
    <form onSubmit={formSubmitHandler}>
      <div className='expense-form'>
        <div className='expense-form-content  '>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={(event)=>{setEnteredTitle(event.target.value)}} />
        </div>

        <div className='expense-form-content  '>
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={(event)=>{setEnteredAmount(event.target.value)}} />
        </div>

        <div className='expense-form-content  '>
          <label>Date</label>
          <input type="date" value={enteredDate} min='2023-01-01' max='2023-12-31' onChange={(event)=>{setEnteredDate(event.target.value)}} />
        </div>
      </div>

      <div className='button-actions'>
        <button type='button' onClick={props.onRemove}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm