const React = require('react');
const ExpenseList=require('./ExpenseList')

const ExpenseDashboardPage = () => {
    return (
        <div>
            <h1>
                <ExpenseList />
            </h1>
        </div>
    )
}

module.exports=ExpenseDashboardPage
