import { useState } from "react"
import NewExpense from "./NewExpenses/NewExpense"
import Expenses from "./Expenses/Expenses"

export type expenseArrayType = {
  title : string
  amount :  number | string
  date : Date
}


function App() {
  const [expenseArray,setExpenseArray] = useState<expenseArrayType[]>([])

  const sum = expenseArray.reduce((acc : number,it : expenseArrayType)=>{
    return  acc + Number(it.amount)  //* number | string(cant be inserted where number is expected(so we convert it Numvber))
  },0)
  


  return (
    <div>
      <span className="bill">Total : ₹{sum}</span>
      <NewExpense setExpenseArray = {setExpenseArray} />
      <Expenses expenseArray = {expenseArray} setExpenseArray = {setExpenseArray} />
    </div>
  )
}

export default App