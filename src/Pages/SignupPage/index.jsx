import React from 'react'

function SignupPage() {
  return (
    <div>
        <h1>Sign-up Page</h1>
        <form>
            <div>
                <label>Name:</label>
                <input type='text'/>
            </div>
            <br />
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
                <button className="login-btn" type="submit">Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default SignupPage