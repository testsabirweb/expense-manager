const React = require('react');
const ReactDOM = require('react-dom')
const appRoot = document.getElementById('app')
// const { BrowserRouter, Route, Switch, Link, NavLink } = require('react-router-dom')
require('normalize.css/normalize.css')
require('./styles/styles.scss')
require('react-dates/lib/css/_datepicker.css')
const { Provider } = require('react-redux')

const store = require('./stores/configureStore')
const AppRouter = require('./routers/AppRouter')

const { startSetExpenses } = require('./actions/expenses')
const { setTextFilter } = require('./actions/filters')

const getVisibleExpenses = require('./selectors/expenses')

import './firebase/firebase';
console.log('app.js is running...........')

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>loading....</p>, appRoot)

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, appRoot)
})

