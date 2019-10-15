const { NavLink } = require('react-router-dom')
const React = require('react');
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => {
    return (
        <header>
            <h1>expense app</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>   HOME</NavLink>
            <NavLink to="/create" activeClassName="is-active">     CREATE</NavLink>
            {/**<NavLink to="/help" activeClassName="is-active">   HELP</NavLink> */}
            <button onClick={startLogout}>logout</button>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)