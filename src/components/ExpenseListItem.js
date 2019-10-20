const React = require('react')
import moment from 'moment'
const { Link } = require('react-router-dom')
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
            ₹ {numeral(amount).format('0,0.00')}
            -
            {moment(createdAt).format('DD/MMM/YYYY')}
            </p>
        </div>
    )
}



module.exports = ExpenseListItem