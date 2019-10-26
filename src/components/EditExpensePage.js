const React = require('react');
const { connect } = require('react-redux')
const ExpenseForm = require('./ExpenseForm')
const { startEditExpense, startRemoveExpense } = require('./../actions/expenses')

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push('/')//for redirectonto home page
    }
    onClick = (e) => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')//for redirectonto home page
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h2 className="content-container__title">Edit Expense</h2>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        onClick={this.onClick}
                    > Remove Expense
                </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)