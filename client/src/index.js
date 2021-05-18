import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

import {store} from "./store/RootReducer";

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));