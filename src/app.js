const React = require('react');
const ReactDOM = require('react-dom')
const appRoot = document.getElementById('app')
// const { BrowserRouter, Route, Switch, Link, NavLink } = require('react-router-dom')
require('normalize.css/normalize.css')
require('./styles/styles.scss')
require('react-dates/lib/css/_datepicker.css')
const { Provider } = require('react-redux')

const store = require('./stores/configureStore')
import AppRouter, { history } from './routers/AppRouter'

const { startSetExpenses } = require('./actions/expenses')
import { login, logout } from './actions/auth'

const getVisibleExpenses = require('./selectors/expenses')

import { firebase } from './firebase/firebase';
console.log('app.js is running...........')

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

import LoadingPage from './components/LoadingPage'

const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
)

ReactDOM.render(<LoadingPage />, appRoot)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, appRoot)
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
