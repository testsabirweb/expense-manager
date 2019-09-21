const React = require('react');
const ExpenseList = require('./ExpenseList')
const ExpenseListFilters = require('./ExpenseListFilters');

const ExpenseDashboardPage = () => {
    return (
        <div>
            <h1>
                <ExpenseListFilters />
                <ExpenseList />
            </h1>
        </div>
    )
}

module.exports = ExpenseDashboardPage
