import React, { useState } from "react";
import { AddExpenseForm } from "../components/form/AddExpenseForm";
import nextId from "react-id-generator";
import '../styles/pages/AddExpense.css'
import { Card } from "../components/ui/Card";




export const AddExpense = (props) => {

    const [isAdd, setAddState] = useState(false);

    const handleClick = (e) => {
        setAddState(current => !current);
    }



    const saveExpenseDataHandler = (enteredData) => {
        setAddState(current => !current);
        const expenses = {
            ...enteredData,
            id: nextId()
        };
        props.onAddExpense(expenses);
    }

    return (
        <Card>
            <div className="addexp-container">
                <button onClick={handleClick} type="button"> Add New Expense</button>
                <div className={isAdd ? "addexp-input-container" : "addexp-input-container hidden"}>
                    {/* <h2>Add your new expense</h2> */}
                    <div className="input-content">
                        <AddExpenseForm onSavedExpenseData={saveExpenseDataHandler} onCancel={handleClick} />
                    </div>
                </div>
            </div>
        </Card>
    )
}