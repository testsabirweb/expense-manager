const { NavLink } = require('react-router-dom')
const React = require('react');

const Header = () => {
    return (
        <header>
            <h1>expense app</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>   HOME</NavLink>
            <NavLink to="/create" activeClassName="is-active">     CREATE</NavLink>
            {/**<NavLink to="/help" activeClassName="is-active">   HELP</NavLink> */}
        </header>
    )
}

module.exports = Header