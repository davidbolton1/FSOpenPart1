import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

const App = () => {
    const name = 'John'
    const age = 20
    const now = new Date()
    const a = 10
    const b = 20

    return (
        <div>
            <p> Hello world, it is {now.toString()}</p>
            <p>
                {a} plus {b} is {a + b}
            </p>
            <Hello name="David" age={25} />
            <Hello name={name} age={age} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
