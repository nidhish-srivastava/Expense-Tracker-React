import React,{useEffect} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
      <div className='expense-item'>
      <ExpenseDate tarik={props.date} />
      <h2>{props.title}</h2>  {/* Could have inserted h2 inside the div,but didnt coz of responsiveness */}
      <div className='expenseItem-content'>
      <i className="fa fa-trash-o" aria-hidden="true" onClick={()=> {
             props.deleteExpense(props.id) }}></i>
      <div className='expenseItem-amount'>&#8377; {props.amount}</div>
      </div>
      </div>
  )
}

export default ExpenseItem