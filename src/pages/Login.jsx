import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Start Chat</h1>
            <form action="">
            <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Sign in</button>
            </form>
            <span>Don't have an account?<a>REGISTER HERE</a></span>

        </div>
    )
}

export default Login
