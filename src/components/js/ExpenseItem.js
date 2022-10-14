import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import '../css/ExpenseItem.css';

export const ExpenseItem = (props) => {

    return (
        <div className="item-container">
            <ExpenseDate expDate={props.expDate} expName={props.expName} expAmount={props.expAmount} />
            <div className="item-description">
                <h2 className="item-name"> {props.expName} </h2>
                <div className="item-amount">
                    {'$' + props.expAmount}
                </div>
            </div>
        </div>
    )
}

