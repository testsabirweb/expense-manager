const React = require('react');
const ExpenseForm = require('./ExpenseForm')
const { connect } = require('react-redux')
const { addExpense } = require('./../actions/expenses')

const AddExpensePage = (props) => {
    return (
        <div>
            <h1>add expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense))
                    props.history.push('/')//for redirection to home page
                }}
            />
        </div>
    )
}

const ConnectedAddExpensePage = connect()(AddExpensePage)
module.exports = ConnectedAddExpensePage