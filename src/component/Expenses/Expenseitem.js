import React, { useState } from "react";
import "./Expenseitem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expenseitem = (props)=>{

    
    return (
        <Card>
            <div>
              <ExpenseDate date={new Date(props.date)}/>
            </div>
            <div>{props.title}</div>
            <div>Amount: ${props.amount}</div>
           <br />
        </Card>
    );
}

export default Expenseitem;