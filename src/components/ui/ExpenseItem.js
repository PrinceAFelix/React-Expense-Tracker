import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import '../../styles/ui/ExpenseItem.css';

export const ExpenseItem = (props) => {

    // const [description, setDescription] = useState('');
    // const [isAdd, setAddState] = useState(false);

    return (
        <div className="item-container">
            <ExpenseDate expDate={props.expDate} expName={props.expName} expAmount={props.expAmount} />
            <div className="item-description">
                <h2 className="item-name"> {props.expDesc} </h2>
                <div className="item-amount">
                    {'$' + props.expAmount}
                </div>
            </div>
            {/* <button type="button" onClick={changeTitle}>Change Name</button> */}
        </div>
    )
}

