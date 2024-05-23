import React from 'react'
import "../styles/pages/signin.css"
import "../styles/components/scard.css"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'



export default function Edit() {
    const [addPost, setAddPost] = useState({
        name:"",
        title:"",
        content:""
    }); 

    const navigate = useNavigate()
    const location = useLocation()

    const postId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setAddPost((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async (e) =>{
        e.preventDefault()
        try {
            await axios.put("http://localhost:8000/posts/" + postId, addPost)
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
                <span className='text'>Edit Kutips</span>
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
                <button onClick={handleClick}>Update ur thoughts!</button>
            </form>
        </div>
    </div>
            </div>
            
        </div>
    </div>
  )
}
