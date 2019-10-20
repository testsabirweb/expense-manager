import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from './../selectors/expenses'
import selectExpensesTotal from './../selectors/expense-total'
export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal=numeral(expensesTotal).format('0,0.00')
    return (
        <div>
            viewing {expensesCount} {expenseWord} totalling of ₹ {formatedExpensesTotal}
        </div>
    )
}

const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters)

    return{
        expensesCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)