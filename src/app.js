import './css/main.scss';
import './users.html';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import App from "./js/App.jsx";




ReactDOM.render(
    <App name="Webpack 3 react"/>, 
    document.getElementById('root')
    )

module.hot.accept();
