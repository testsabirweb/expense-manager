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
            category: props.expense ? props.expense.category : '',
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
                note: this.state.note,
                category: this.state.category ? this.state.category : 'expense'
            })
        }
    }
    onCategoryChange = (e) => {
        const category = e.target.value
        this.setState(() => {
            return {
                category
            }
        })
    }
    render() {
        return (
            <div>

                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        className="text-input"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        className="text-input"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <select
                        className="select"
                        value={this.state.category}
                        onChange={this.onCategoryChange}
                    >
                        <option value="expense">Expenditure</option>
                        <option value="saving">Saving</option>
                    </select>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        className="textarea"
                        placeholder="add note to expense(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <div >
                        <button className="button">Save Expense</button>
                    </div>

                </form>
            </div>
        )
    }
}

module.exports = ExpenseForm