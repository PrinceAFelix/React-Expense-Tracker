import React, { useState } from "react";

import '../css/ExpenseGraph.css'

export const ExpenseGraph = (props) => {

    const [year, setYear] = useState('');

    const handleChangeSelect = (e) => {

        const year = e.target.value

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
            <div className="graph-container">
                <div className="graph-item">
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Jan</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Feb</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Mar</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Apr</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>May</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Jun</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Jul</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Aug</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Sep</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Oct</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Nov</label>
                    </div>
                    <div id="jan">
                        <div className="capsule"></div>
                        <label>Dec</label>
                    </div>
                </div>
            </div>
        </div>
    )
}