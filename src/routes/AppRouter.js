const React = require('react');
const { BrowserRouter, Route, Switch, Link, NavLink } = require('react-router-dom')

const ExpenseDashboardPage = require('./../components/ExpenseDashboardPage')
const AddExpensePage = require('./../components/AddExpensePage')
const EditExpensePage = require('./../components/EditExpensePage')
const HelpPage = require('./../components/HelpPage')
const NotFoundPage = require('./../components/NotFoundPage')
const Header =require('./../components/Header')

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

module.exports=AppRouter