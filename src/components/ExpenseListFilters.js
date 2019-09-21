const React = require('react')
const { connect } = require('react-redux')
const {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setEndDate,
    setStartDate
} = require('./../actions/filters')
const { DateRangePicker } = require('react-dates')

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused
            }
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}/////here we set the value of an element
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));/////here value is accessed and then dispatched
                    }}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate())
                        }
                        else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
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
        )

    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)

module.exports = ConnectedExpenseListFilters