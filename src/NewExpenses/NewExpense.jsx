import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
   const [load,setLoad] = useState(false)
   
   const addEHandler = () =>{
    setLoad(true)
   }

   const removeEHandler = () =>{
    setLoad(false)
   }

  return (
    <div className='new-expense'>
     {!load && <button onClick={addEHandler}>Add a Expense</button>}    
     {load && <ExpenseForm output={props.data} onRemove={removeEHandler}/>}
    </div>
  )
}

export default NewExpense