import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './static/iconfont/iconfont.css'
import store from './store/store';
import { Provider } from 'react-redux';

const app = (
    <Provider store = { store }>
        <App/>
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

