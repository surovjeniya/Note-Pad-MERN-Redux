import React from 'react'
import  ReactDOM  from 'react-dom'
import './index.scss'
import App from './App'
import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {rootReducer} from './redux/rootReducer'

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
))


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
