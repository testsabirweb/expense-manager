const React = require('react');
const { connect } = require('react-redux')
const ExpenseForm = require('./ExpenseForm')
const { editExpense, startRemoveExpense } = require('./../actions/expenses')

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')//for redirectonto home page
    }
    onClick = (e) => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')//for redirectonto home page
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onClick}
                > REMOVE
                </button>
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
const mapDispatchToProps = (dispatch,props) => {
    return {
        editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
        startRemoveExpense:(data)=>dispatch(startRemoveExpense(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)