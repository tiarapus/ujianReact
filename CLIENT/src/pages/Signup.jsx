import React from 'react'
import { useState } from 'react';
import "../styles/pages/signin.css"
import "../styles/components/scard.css"
import axios from "axios"



export default function Signup() {
  
  return (
    <div className='body'>
        <div className="container">
        <div className='container'>
        <div className="cards">
            <div className="header">
                <span className='text'>Sign Up</span>
                <span><a href="/Signin">Already have an account yet?</a></span>
            </div>
            <form action="">
                <div className="email">
                    <input required type="text" name='name' placeholder='Name'/>
                </div>
                <div className="email">
                    <input required type="text" name='title' placeholder='title'/>
                </div>
                <div className="email">
                    <input required type="text" name='username' placeholder='Username'/>
                </div>
                <div className="password">
                    <input required type="text" name='email' placeholder='Email Address'/>
                </div>
                <div className="password">
                    <input required type="password" name='password' placeholder='Password'/>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
        </div>
    </div>
  )
}
