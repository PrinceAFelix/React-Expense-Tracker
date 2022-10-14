import React from "react";
import { ExpenseGraph } from "./ExpenseGraph";
import { ExpenseItem } from "./ExpenseItem";

import '../css/ExpenseContainer.css'

export const ExpenseContainer = (props) => {
    return (
        <div className="expense-container">
            <div className="heading">
                <h2>Filter by year</h2>
                <button className="button">2021</button>
            </div>
            <ExpenseGraph />
            <ExpenseItem expDate={props.expenses[0].date} expName={props.expenses[0].name} expAmount={props.expenses[0].amount} />
            <ExpenseItem expDate={props.expenses[1].date} expName={props.expenses[1].name} expAmount={props.expenses[1].amount} />
            <ExpenseItem expDate={props.expenses[2].date} expName={props.expenses[2].name} expAmount={props.expenses[2].amount} />
            <ExpenseItem expDate={props.expenses[3].date} expName={props.expenses[3].name} expAmount={props.expenses[3].amount} />
        </div>
    )
}