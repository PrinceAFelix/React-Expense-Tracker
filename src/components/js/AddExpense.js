import React, { useState } from "react";
import { AddExpenseForm } from "./AddExpenseForm";

import '../css/AddExpense.css'

let initialId = 5;

export const AddExpense = (props) => {

    const [isAdd, setAddState] = useState(false);

    const handleClick = (e) => {
        setAddState(current => !current);
    }



    const saveExpenseDataHandler = (enteredData) => {
        setAddState(current => !current);
        const expenses = {
            ...enteredData,
            id: initialId++
        };
        console.log(expenses.id)
        props.onAddExpense(expenses);
    }

    return (
        <div className="addexp-container">
            <button onClick={handleClick} type="button"> Add New Expense</button>
            <div className={isAdd ? "addexp-input-container" : "addexp-input-container hidden"}>
                <div className="input-content">
                    <AddExpenseForm onSavedExpenseData={saveExpenseDataHandler} />
                </div>
            </div>
        </div>
    )
}