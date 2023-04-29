import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
const Chart=(props)=>{
    const dataPointValues=props.datapoints.map(datapoint=>datapoint.value);
    const totalMaxValue=Math.max(...dataPointValues);
    return(
    <div className='chart'>
        {props.datapoints.map(data=>{return <ChartBar key={data.id} value={data.value} maxValue={totalMaxValue} label={data.label}/> })}
        </div>
    );
};
export default Chart;