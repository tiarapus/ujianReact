import React from 'react'
import "../styles/pages/signin.css"
import "../styles/components/scard.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function Add() {
    const [addPost, setAddPost] = useState({
        name:"",
        title:"",
        content:""
    }); 

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setAddPost((prev)=>({...prev, [e.target.name]:e.target.value}))
    }
    const handleClick = async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/posts", addPost)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div className="body">
            <div className="container">
            <div className='container'>
        <div className="cards">
            <div className="header">
                <span className='text'>Add Kutips</span>
            </div>
            <form action="">
                <div className="email">
                    <input type="text" name='name' onChange={handleChange} placeholder='Name'/>
                </div>
                <div className="password">
                    <input type="text" name='title' onChange={handleChange} placeholder='Title'/>
                </div>
                <div className="password">
                    <input type="text" name='content' onChange={handleChange} placeholder='Whats on your mind?'/>
                </div>
                <button onClick={handleClick}>Land ur thoughts!</button>
            </form>
        </div>
    </div>
            </div>
            
        </div>
    </div>
  )
}
