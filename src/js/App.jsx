import React, { Component } from 'react';
import haskell_logo from "../img/haskell_logo.png";
import Plx from 'react-plx';


export default class App extends Component {



    render () {

            let plx = {
        start: 'top',
        duration: 300,
        properties: [
            {
                startValue: 1,
                endValue: 0.2,
                property: 'opacity'
            },
            {
                startValue: 0,
                endValue: 500,
                unit: '%',
                property: 'translateY'
            }
        ]
    }


        return (
            <div>
            <div id="title">Hello { this.props.name }</div>
            <Plx 
            className="plx-ex"
            parallaxData={ plx }
            >
                <img src={ haskell_logo } alt="haskell"/>
            </Plx>
            <ul>
                <li>d3</li>
                <li>e-charts</li>
                <li>bootstrap</li>
                <li>sass</li>
            </ul>
            <div id="dump"></div>

            </div>


            )
    }
}