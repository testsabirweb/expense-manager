import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from './../selectors/expenses'
import selectExpensesTotal from './../selectors/expense-total'
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expensesTotal).format('0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title"> viewing <span>{expensesCount}</span> {expenseWord} totalling of ₹ <span>{formatedExpensesTotal}</span></h2>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)