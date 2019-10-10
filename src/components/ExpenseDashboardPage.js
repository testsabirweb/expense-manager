const React = require('react');
import ExpenseList from './ExpenseList'
import ExpenseListFilters from'./ExpenseListFilters'
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

export default ExpenseDashboardPage
