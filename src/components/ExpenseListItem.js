const React = require('react')
import moment from 'moment'
const { Link } = require('react-router-dom')
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link className="list-item"
                to={`/edit/${id}`}
            >
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__sub-title">
                        {moment(createdAt).format('DD/MMM/YYYY')}
                    </span>
                </div>
                <h3 className="list-item__data">₹ {numeral(amount).format('0,0.00')}</h3>
            </Link>
        </div>
    )
}



module.exports = ExpenseListItem