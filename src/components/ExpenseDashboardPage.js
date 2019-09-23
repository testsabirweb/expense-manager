const React = require('react');
const ExpenseList = require('./ExpenseList')
const ExpenseListFilters = require('./ExpenseListFilters');
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => {
    return (
        <div>
            <h1>
                <ExpensesSummary />
                <ExpenseListFilters />
                <ExpenseList />
            </h1>
        </div>
    )
}

module.exports = ExpenseDashboardPage
