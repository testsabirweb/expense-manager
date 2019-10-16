const { createStore, combineReducers, applyMiddleware, compose } = require('redux')
const expensesReducer = require('./../reducers/expenses')
const filtersReducers = require('./../reducers/filters')
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

module.exports = store