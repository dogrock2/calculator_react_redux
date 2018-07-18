import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import App from './components/App';
import Bootstrap from 'bootstrap';



ReactDOM.render( <Provider store={createStore(reducers)}><App /></Provider>,  document.getElementById("root"));