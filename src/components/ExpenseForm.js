const React = require('react')
const moment = require('moment')
const { SingleDatePicker } = require('react-dates')

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => {
            return {
                description
            }
        })
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => {
            return {
                note
            }
        })
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount
                }
            })
        }
    }
    //https://github.com/airbnb/react-dates
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => {
                return {
                    createdAt
                }
            });
        }
    };
    //https://github.com/airbnb/react-dates
    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            }
        });
    };
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'please provide description and amount'
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    error: ''
                }
            })
            this.props.onSubmit({///this props can come from AddExpensePage or EditExpensePage
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),//valueOf()is a method from moment.js which returns the unix time stamp
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="add note to expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>add expense</button>
                </form>
            </div>
        )
    }
}

module.exports = ExpenseForm