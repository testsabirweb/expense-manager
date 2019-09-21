const React = require('react')

const { Link } = require('react-router-dom')

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p> {amount}       {createdAt}</p>
        </div>
    )
}



module.exports = ExpenseListItem