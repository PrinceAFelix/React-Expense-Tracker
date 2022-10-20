import React, { useState } from "react";

import '../../styles/ui/ExpenseDateFilter.css'

export const ExpenseDateFilter = (props) => {

    let [year, setYear] = useState('');

    const handleChangeSelect = (e) => {

        year = e.target.value

        props.onSelectYear(year)

        setYear('');

    }

    return (
        <div className="container">
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select value={props.selected} onChange={handleChangeSelect}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                    </select>
                </div>
            </div>
        </div>
    )
}