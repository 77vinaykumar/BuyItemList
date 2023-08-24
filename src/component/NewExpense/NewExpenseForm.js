import React, { useState } from 'react'

function NewExpenseForm(props) {
    const [setTitle, setNewTitle] = useState("");
    const [setDate, setNewDate] = useState("");
    const [setAmount, setNewAmount] = useState("");

    const titleChangeHandler = (event)=>{
        setNewTitle(event.target.value)
    };
    const dateChangeHandler = (event)=>{
        setNewDate(event.target.value)
    };
    const amountChangeHandler = (event)=>{
        setNewAmount(event.target.value)
    };

    const submitHandler = (event)=>{
       event.preventDefault();


       const expenseData = {
        title: setTitle,
        date: new Date(setDate),
        amount: setAmount
       }

       props.parExpense(expenseData)

       console.log(expenseData)

       setNewTitle("");
       setNewDate("");
       setNewAmount("")


    }
  return (
      <form onSubmit={ submitHandler }>
        <div>
            <div>
                <label htmlFor="">title</label>
                <input type="text" value={setTitle}  onChange={titleChangeHandler}/>
            </div>
            <div>
                <label htmlFor="">date</label>
                <input type="date" value={setDate}  onChange={dateChangeHandler}/>
            </div>
            <div>
                <label htmlFor="">Amount</label>
                <input type="Number" min={0.01} step={0.01} value={setAmount} onChange={amountChangeHandler}/>
            </div>
            <div>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
      </form>
  )
}

export default NewExpenseForm;