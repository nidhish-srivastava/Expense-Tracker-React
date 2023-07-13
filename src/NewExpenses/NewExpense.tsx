import { useState } from "react"
import { expenseArrayType } from "../App"
import './NewExpense.css'

type NewExpensePropTypes = {
   setExpenseArray : React.Dispatch<React.SetStateAction<expenseArrayType[]>>
}

function NewExpense({setExpenseArray} : NewExpensePropTypes) {
    const [load,setLoad] = useState(false)
    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    const [enteredAmount,setEnteredAmount] = useState<number | string>(0)

    const formSubmitHandler = (event : any) =>{
        event.preventDefault()
    
        if(enteredAmount && enteredDate && enteredTitle){
          const obj  = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            // id: Math.random().toString()
          }
      
          setExpenseArray(e=>[...e,obj])   //* If we directly pass the obj,it wud give error,it is expecting an array(which is the expense array)
          
          setEnteredAmount(0)
          setEnteredDate('')
          setEnteredTitle('')
        }
      }
    
  
  return (
    <div className="new-expense">
        {!load ?
        <button onClick={()=>setLoad(true)}>Add a expense</button>
        :(
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
        <button type='button' onClick={()=>setLoad(false)}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
        )}
    </div>
  )
}

export default NewExpense