import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  myFirstReducer from './reducers/reducer';
import mySaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root')
);