import React, { useState } from "react";


import "../../styles/form/AddExpenseForm.css"


export const AddExpenseForm = (props) => {

    const [userInput, setInput] = useState({
        descriptionInput: '',
        dateInput: '',
        amountInput: '',
    })


    const descriptionChangeHandler = (event) => {
        setInput((prevState) => {
            return { ...prevState, descriptionInput: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        setInput((prevState) => {
            return { ...prevState, dateInput: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setInput((prevState) => {
            return { ...prevState, amountInput: event.target.value }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const newExp =
        {
            name: userInput.descriptionInput,
            amount: userInput.amountInput,
            date: new Date(userInput.dateInput),
        }

        props.onSavedExpenseData(newExp);

        setInput(
            {
                descriptionInput: '',
                dateInput: '',
                amountInput: '',
            }
        );
    }

    const handleClickCancel = () => {
        console.log("Press")
        props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div className="addexp-input">
                    <label>Description</label>
                    <input autoComplete="off" id="input-desc" value={userInput.descriptionInput} type="text" onChange={descriptionChangeHandler} name="description" placeholder="Description" />
                </div>
                <div className="addexp-input">
                    <label>Amount</label>
                    <input autoComplete="off" id="input-amount" step="0.01" value={userInput.amountInput} type="number" onChange={amountChangeHandler} min={0} name="amount" placeholder="$0.00" />
                </div>
                <div className="addexp-input">
                    <label>Date</label>
                    <input autoComplete="off" id="input-date" value={userInput.dateInput} type="date" onChange={dateChangeHandler} name="date" placeholder="Date" />
                </div>
            </div>
            <div className="btn">
                <input className="control-btn" id="submit-desc" type="submit" value="Add" />
                <button onClick={handleClickCancel} className="control-btn" id="cancel-desc" type="button" value="Cancel">Cancel</button>
            </div>
        </form>
    )
}