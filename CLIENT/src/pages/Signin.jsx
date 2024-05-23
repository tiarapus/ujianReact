import React from 'react'
import "../styles/pages/signin.css"
import "../styles/components/scard.css"


export default function Signin() {
  return (
    <div>
        <div className="body">
            <div className="container">
            <div className='container'>
        <div className="cards">
            <div className="header">
                <span className='text'>Sign In</span>
                <span><a href="/Signup">Don't have an account yet?</a></span>
            </div>
            <form action="">
                <div className="email">
                    <input type="text" name='email' placeholder='Email address'/>
                </div>
                <div className="password">
                    <input type="password" name='password' placeholder='Password'/>
                </div>
                <button>Sign in</button>
            </form>
        </div>
    </div>
            </div>
            
        </div>
    </div>
  )
}
