import React, { useEffect, useState } from "react";

import "./App.css"

import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";



const Dummy_Expense = [];

const App = ()=>{
    
    const [expense , setNewExpense] = useState(Dummy_Expense);


    function fetchData(){
        fetch("http://localhost:5000/listdata")
        .then(response => {
           response.json();
        })
        .then(data => {
           console.log(data);
           setNewExpense(data);
        })
    }


    useEffect(()=>{
        fetchData()
    },[]);

     

   
    
    const frontData = (addingData)=>{
            // const upDateExpense = [addingData, ...expense];
            // setNewExpense(upDateExpense)

            fetch("http://localhost:5000/list", {
                method: "POST",
                body: JSON.stringify(addingData),
                headers:{'content-Type' : 'application/json'}
            }).then(
                response =>{
                    fetchData();
                }
            )
         }
        
    
          
    return (
        <div>
             <h1>where is your hometown</h1><br /><br />
             <NewExpense onFormData={ frontData }/><br /><br />
             <Expenses item={expense}/>
            
        </div>
    );
}


export default App;