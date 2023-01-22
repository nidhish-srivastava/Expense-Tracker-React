import React,{useState} from "react"
import Expenses from "./Expenses/Expenses"
import NewExpense from "./NewExpenses/NewExpense"


function App() {

  const [expense,setExpense] = useState([])

  const itemHandler = (e) =>{
  setExpense((event)=>{
    return [e,...event]
  })
}
const deleteExpenseHandler = (e) =>{
  const n=expense.filter((arr,index)=>index!=e)
  setExpense(n)
}


  return (
  <React.Fragment>
    <NewExpense data={itemHandler}/>
    <Expenses itemsArray={expense} deleteExpenseHandler={deleteExpenseHandler}/>
  </React.Fragment>
  );
}

export default App;
