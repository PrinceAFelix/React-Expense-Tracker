
import React from "react"

import { ExpenseItem } from "./ExpenseItem"
import { EmptyExpense } from "./EmptyExpense"

import "../../styles/ui/ExpensesList.css"

export const ExpensesList = (props) => {

    if (props.exp.length === 0) {
        return <EmptyExpense />
    }

    return (
        <ul>
            {
                props.exp.map((expense) => (
                    <ExpenseItem key={expense.id} expDate={expense.date} expDesc={expense.name} expAmount={expense.amount} />)
                )
            }
        </ul>
    );

}