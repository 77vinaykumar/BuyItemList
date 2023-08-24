import React from 'react'
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {
    const expensehandler = (datacoming)=>{
       const checkData = {
         ...datacoming,
         id: Math.random().toString()
       }

       props.onFormData(checkData)
       console.log(checkData)
    }
  return (
    <div>
        <NewExpenseForm  parExpense={ expensehandler }/>
    </div>
  )
}

export default NewExpense;