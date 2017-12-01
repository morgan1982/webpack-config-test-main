import './css/main.scss';

import React, {Component} from 'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader";
import 'bootstrap';

import App from "./js/App.jsx";




render(
    <AppContainer>
        <App />
    </AppContainer>, document.getElementById('root')
    )

if(module.hot) {
    module.hot.accept('./js/App.jsx', () => {
        render(
            <AppContainer>
                <App />
            </AppContainer>, document.getElementById('root')
            )
    })
}


