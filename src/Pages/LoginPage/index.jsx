import React from 'react'

function LoginPage() {
  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <div>
                <label>Email:</label>
                <input type='email'/>
            </div>
            <br />
            <div>
            <label>Password:</label>
                <input type='password'/>
            </div>
            <br />
            <div>
                <button className="login-btn" type="submit">Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage