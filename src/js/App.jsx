import React, { Component } from 'react';
import haskell_logo from "../img/haskell_logo.png";

import Chart from './Components/Charts.js';
import Drop from './Components/Drop'
// import Plx from 'react-plx';


export default class App extends Component {



    render () {



        return (
            <div>
            <div id="title">Hello { this.props.name }</div>
                <img src={ haskell_logo } alt="haskell"/>
            <Chart name="React prop"/>
            <ul>
                <li>d3</li>
                <li>e-charts</li>
                <li>bootstrap</li>
                <li>sass</li>
                <li>develop branch</li>
                <li>test</li>
                <li className="fa fa-beer fa-2x">kolos</li>
            </ul>
            <button type="button" className="btn btn-danger">press</button>
            <Drop />

            </div>


            )
    }
}