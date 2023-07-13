import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

type ExpenseItemPropTypes = {
   date : Date
   title : string
   amount : number | string
   id : number
   deleteExpense : (id : number)=>void
}

function ExpenseItem({date,title,amount,id,deleteExpense} : ExpenseItemPropTypes) {

  return (
    <div className='expense-item'>
      <ExpenseDate date={date}/>
      <h2>{title}</h2>
      <div className="expenseItem-content">
        <span className='delete-icon'>
          <i className="fa-solid fa-trash" aria-hidden = "true" onClick={()=>deleteExpense(id)} ></i>
          </span>
      <div className='expenseItem-amount'>&#8377; {amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem