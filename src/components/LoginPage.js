import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => {
    return (
        <div>
            <button onClick={startLogin} >login</button>
        </div>
    )
}

const matchDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, matchDispatchToProps)(LoginPage)