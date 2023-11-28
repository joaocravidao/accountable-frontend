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
            <div>
                <label>Email:</label>
                <input type='email'/>
            </div>
            <div>
            <label>Password:</label>
                <input type='password'/>
            </div>
            <br></br>
            <div>
                <button className="login-btn" type="submit">Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default SignupPage