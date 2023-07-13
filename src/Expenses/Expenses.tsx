import { expenseArrayType } from "../App"
import { useState } from 'react'
import ExpenseFilter from "./ExpenseFilter"
import './Expenses.css'
import ExpenseItem from "./ExpenseItem"

type expenseArrayPropType = {
    expenseArray : expenseArrayType[]
    setExpenseArray : React.Dispatch<React.SetStateAction<expenseArrayType[]>>
}


function Expenses({expenseArray,setExpenseArray} : expenseArrayPropType) {
  const [filteredMonth,setFilteredMonth] = useState<string>('January')

  const deleteExpenseHandler = (e : number) =>{
    const updated = expenseArray.filter((_,index)=>index!=e)
    setExpenseArray(updated)
  }

  const filteredMonthExpense = expenseArray.filter(event=>{
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNumber = new Date(event.date)
    const monthName = (month[monthNumber.getMonth()]) 
    return monthName === filteredMonth  
  })


  // const expensesInOrder = filteredMonthExpense.slice().sort((a,b)=> a.date.getTime()-b.date.getTime())  //* if we dont use getTime,then it shows error(lhs and rhs shud be nuber,any,..)

  return (
    <div className="MainContainer">
      {/* <ExpenseFilter updateMonth = {(e)=>setFilteredMonth(e)} default = {filteredMonth} /> */}
      <ExpenseFilter filteredMonth = {filteredMonth} updateMonth = {e=>setFilteredMonth(e)} />
      {filteredMonthExpense.length===0 && <p>No expense Found!!!</p>}
      {filteredMonthExpense.map((e,i)=>(
        <ExpenseItem
        key={i}
        id={i}
        date={e.date}
        amount={e.amount}
        title={e.title}
        deleteExpense={deleteExpenseHandler}
        />
      )) }
    </div>
  )
}

export default Expenses