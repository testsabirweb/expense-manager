const { Link } = require('react-router-dom')
const React = require('react');
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard" >
                        <h1>EXPENSE-APP</h1>
                    </Link>

                    {/**<NavLink to="/help" activeClassName="is-active">   HELP</NavLink> */}
                    <button className="button button--link" onClick={startLogout}>LOGOUT</button>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)