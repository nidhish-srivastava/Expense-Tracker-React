import React from 'react'
import './ExpenseFilter.css'

function ExpenseFilter(props) {
  const dropdownChangeHandler = (event) =>{
    props.onChangeYear(event.target.value)
  }
  return (   
      <div className='filter'>
      <label>Filter by month</label>
      <select value= {props.default} onChange={dropdownChangeHandler}>  {/*  Listening to a event,by pointing it to a function,this function will access the props(i.e.,onChangeFilter) passed from Expenses*/}
        <option value='January'>Jan</option>
        <option value='February'>Feb</option>
        <option value='March'>Mar</option>
        <option value='April'>Apr</option>
        <option value='May'>May</option>
        <option value='June'>Jun</option>
        <option value='July'>Jul</option>
        <option value='August'>Aug</option>
        <option value='September'>Sept</option>
        <option value='October'>Oct</option>
        <option value='November'>Nov</option>
        <option value='December'>Dec</option>
      </select>
      </div>
  )
}

export default ExpenseFilter
