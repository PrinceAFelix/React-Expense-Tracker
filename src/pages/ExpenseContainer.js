import React, { useState } from "react";
import { ExpenseDateFilter } from "../components/ui/ExpenseDateFilter";
import { ExpensesList } from "../components/ui/ExpensesList";
import { Card } from "../components/ui/Card";
import { ExpenseChart } from "../components/ui/ExpenseChart";



import '../styles/pages/ExpenseContainer.css'

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
                <ExpenseDateFilter selected={year} onSelectYear={selectedYear} />
                <ExpenseChart expensesData={selectedExpByYear} />
                <ExpensesList exp={selectedExpByYear} />
            </Card >
        </div>
    )
}