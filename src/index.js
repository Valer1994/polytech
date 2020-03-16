import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../src/stores';
import Autorize from '../src/utils/autorize';
import { TranslatorProvider } from '../src/utils/translator';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <TranslatorProvider>
                <Autorize>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Autorize>
        </TranslatorProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
