import React from 'react';
import './chart.scss';

const Chart = (props) => {

    return (
        <div> 
            <div className="chart">chart</div>
            <div>{ props.name }</div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div class="title-container rounded-top">
                                <h4 className="card-title">Shoes</h4>
                            </div>
                            <p className="card-text">This is the shoes category. Select from a big collection of custom shoes</p>
                            <a href="#">flywalk.com</a>
                        </div>
                    </div>
                </div>
                <dv className="col-md-6">
                    <div className="card">card 2</div>
                </dv>
            </div>
        </div>
        )
}



export default Chart;