import React, { useState } from "react";
import { ExpenseGraph } from "./ExpenseGraph";
import { ExpensesList } from "./ExpensesList";
import { Card } from "./Card";



import '../css/ExpenseContainer.css'

export const ExpenseContainer = (props) => {

    const [year, setYear] = useState('2022')

    const selectedYear = (year) => {
        setYear(year);
    }
    const selectedExpByYear = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });



    return (
        <div >
            <Card className="expense-container">
                <ExpenseGraph selected={year} onSelectYear={selectedYear} />
                <ExpensesList exp={selectedExpByYear} />
            </Card >
        </div>
    )
}