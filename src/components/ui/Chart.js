import React from "react";

import { ChartBar } from "./ChartBar"
import "../../styles/ui/Chart.css"


export const Chart = (props) => {

    const dtVal = props.data.map(dtp => dtp.value)
    const totalMax = Math.max(...dtVal);

    return (
        <div className="chart-container">
            {
                props.data.map(dt => <ChartBar key={dt.label} value={dt.value} max={totalMax} label={dt.label} />)
            }
        </div>
    )
}