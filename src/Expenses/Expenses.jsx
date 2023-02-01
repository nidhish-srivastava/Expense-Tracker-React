import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'


function Expenses(props) {

  const [filteredMonth, setFilteredMonth] = useState('January')

  // const filteredYearData = props.itemsArray

  const filteredYearData = props.itemsArray.filter(event => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNumber = typeof event.date === 'string' ? new Date(Date.parse(event.date)) : event.date
    const monthName = (month[monthNumber.getMonth()])
    return monthName === filteredMonth;   // Accessing the data property of the object(which is inside array)
  })

  return (
    <div className='MainContainer'>
      <ExpenseFilter onChangeYear={(event) => { setFilteredMonth(event) }} default={filteredMonth} />

      {/* We wont use below code coz we will do somefiltering of data then use the map function */}
      {/* {props.itemsArray.map((e)=>(<ExpenseItem key={e.id} date={e.date} amount={e.amount} title={e.title} />))} */}

      {filteredYearData.length === 0 && <p>No Expenses Found !!</p>}
      {filteredYearData.length > 0 && filteredYearData.map((e, index) => (
        <ExpenseItem
          key={index}
          date={typeof e.date === 'string' ? new Date(Date.parse(e.date)) : e.date}
          id={index}
          amount={e.amount}
          title={e.title}
          deleteExpense={props.deleteExpenseHandler}
        />
      ))}


    </div>
  )
}

export default Expenses