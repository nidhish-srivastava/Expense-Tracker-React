import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {

  const day = props.tarik.toLocaleString('en-US',{day:'2-digit'})
  const month = props.tarik.toLocaleString('en-US',{month:'long'})
  const year = props.tarik.getFullYear()

  return (
    <div className='date'>
      <div className='day'>{day}</div>
      <div className='month'>{month}</div>
      <div className='year'>{year}</div>
    </div>
  )
}

export default ExpenseDate