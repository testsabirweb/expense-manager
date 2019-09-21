const React = require('react');
const {Link}=require('react-router-dom')

const NotFoundPage = () => {
    return (
        <div>
            <h1>
                404!!! <Link to="/">go home</Link>
            </h1>
        </div>
    )
}


module.exports=NotFoundPage