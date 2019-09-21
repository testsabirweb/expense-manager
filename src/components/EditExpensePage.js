const React = require('react');
const { connect } = require('react-redux')
const ExpenseForm = require('./ExpenseForm')
const { editExpense, removeExpense } = require('./../actions/expenses')

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')//for redirectonto home page
                }
                }
            />
            <button onClick={(e) => {
                props.dispatch(removeExpense({ id: props.expense.id }))
                props.history.push('/')//for redirectonto home page
            }}>
            REMOVE</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }

}

module.exports = connect(mapStateToProps)(EditExpensePage)