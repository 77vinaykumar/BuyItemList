import React from "react";

import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";

const Expenses = (props)=>{
    return (
        <Card>

           {
            props.item.map(expense =>(
                <Expenseitem  
                   key={ expense.id }
                   date={ expense.date}
                   title={ expense.title} 
                   amount={ expense.amount}  
                   />
                  
            ))
             
           }
           
        </Card>
    );
}

export default Expenses;