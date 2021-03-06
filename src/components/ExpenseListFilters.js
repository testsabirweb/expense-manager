const React = require('react')
const { connect } = require('react-redux')
const {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setEndDate,
    setStartDate,
    setCategoryAll,
    setCategoryExpense,
    setCategorySaving
} = require('./../actions/filters')
const { DateRangePicker } = require('react-dates')

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused
            }
        })
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);/////here value is accessed and then dispatched
    }
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate()
        }
        else if (e.target.value === "amount") {
            this.props.sortByAmount()
        }
    }
    onCategoryChange = (e) => {
        if (e.target.value === "all") {
            this.props.setCategoryAll()
        }
        else if (e.target.value === "expense") {
            this.props.setCategoryExpense()
        }
        else if (e.target.value === "saving") {
            this.props.setCategorySaving()
        }
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            placeholder="Search"
                            value={this.props.filters.text}/////here we set the value of an element
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.category}
                            onChange={this.onCategoryChange}
                        >
                            <option value="all">All</option>
                            <option value="expense">Expenditure</option>
                            <option value="saving">Saving</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setCategoryAll: () => dispatch(setCategoryAll()),
        setCategoryExpense: () => dispatch(setCategoryExpense()),
        setCategorySaving: () => dispatch(setCategorySaving())
    }
}
const ConnectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
export default ConnectedExpenseListFilters