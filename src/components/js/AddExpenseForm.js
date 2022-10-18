import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

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

    return (
        <form onSubmit={submitHandler}>
            <div className="addexp-input">
                <label>Description</label>
                <input id="input-desc" value={userInput.descriptionInput} type="text" onChange={descriptionChangeHandler} name="description" placeholder="Description" />
            </div>
            <div className="addexp-input">
                <label>Amount</label>
                <input id="input-amount" step="0.01" value={userInput.amountInput} type="number" onChange={amountChangeHandler} min={0} name="amount" placeholder="$0.00" />
            </div>
            <div className="addexp-input">
                <label>Date</label>
                <input id="input-date" value={userInput.dateInput} type="date" onChange={dateChangeHandler} name="date" placeholder="Date" />
            </div>
            <div className="addexp-input">
                <input id="submit-desc" type="submit" value="Add" />
            </div>
        </form>
    )
}