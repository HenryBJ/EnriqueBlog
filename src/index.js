import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu/Menu';
import store from './Redux/store';
import Root from './root'
import * as serviceWorker from './serviceWorker';


const render=()=>
{ 
  ReactDOM.render(<Menu  />, document.getElementById('menu'));    
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
}
store.subscribe(render)
render()

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
