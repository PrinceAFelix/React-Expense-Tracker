import React from "react";

import '../css/ExpenseDate.css'
export const ExpenseDate = (props) => {
    return (
        <div className="date-container">
            <div className="date">
                <div className="month">
                    {props.expDate.toLocaleString('en-US', { month: 'long' })}
                </div>
                <div className="year">
                    {props.expDate.getFullYear()}
                </div>
                <div className="day">
                    {props.expDate.toLocaleString("en-US", { day: '2-digit' })}
                </div>
            </div>
        </div>
    )
}