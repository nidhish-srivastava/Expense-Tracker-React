import React,{useEffect} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
      <div className='expense-item'>
      <ExpenseDate tarik={props.date} />
      <div className='expenseItem-content'>
      <h2>{props.title}</h2>
      <i className="fa fa-trash-o" aria-hidden="true" onClick={()=> {
             props.deleteExpense(props.id) }}></i>
      <div className='expenseItem-amount'>&#8377; {props.amount}</div>
      </div>
      </div>
  )
}

export default ExpenseItem