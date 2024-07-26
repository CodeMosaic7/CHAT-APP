import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <div className="form-container">
                <form action="">
                    <input type="text" placeholder='display name' /><br />
                    <input type="text" placeholder='email' /><br />
                    <input type="password" placeholder='password' /><br />
                    <span>Add Your Avatar.<input type="file" /></span><br />
                    <button>Sign in</button>
                </form>
            </div>
            <span>Don't have an account? <a>REGISTER HERE</a></span>
        </div>
    )
}

export default Register
