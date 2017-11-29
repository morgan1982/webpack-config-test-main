import '../css/main.scss';
import '../users.html';
// import { RandomGenerator } from './random-generator'; const outputParagraph =
// document.querySelector('#outputParagraph'); const outputRandomInt = () => {
//   outputParagraph.textContent = RandomGenerator.randomInteger(); }; const
// outputRandomRange = () => {     outputParagraph.textContent =
// RandomGenerator.randomRange(1, 500); } const buttonRndInt =
// document.querySelector('#randomInt'); const buttonRndRange =
// document.querySelector('#randomRange');
// buttonRndInt.addEventListener('click', outputRandomInt);
// buttonRndRange.addEventListener('click', outputRandomRange);

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    render() {

        return (
            <div>
                <div>Hello from the class</div>
                <h1 className="title">Babel-react</h1>
                <ul>
                    <li>redux</li>
                    <li>d3</li>
                    <li>font-awasome</li>
                    <li>go lang</li>
                    <li>haskell</li>
                    <li>tensor flow</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root'))