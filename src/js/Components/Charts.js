import React from 'react';
import './chart.scss';

const Chart = (props) => {

    return (
        <div> 
            <div className="chart">chart</div>
            <div>{ props.name }</div>
        </div>
        )
}


export default Chart;