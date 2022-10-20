import React from "react";

import "../../styles/ui/ChartBar.css"

export const ChartBar = (props) => {

    let barFillHeight = '0%'

    if (props.max > 0) {
        barFillHeight = Math.round(props.value / props.max * 100) + '%';
    }

    // console.log(props.value)

    // console.log(props.label + " : " + barFillHeight)

    return (
        <div className="chart-bar">
            <div className="chart-bar_outer">
                <div className="chart-bar_inner" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar_label">{props.label}</div>
        </div>
    )
}