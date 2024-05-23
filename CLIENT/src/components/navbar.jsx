import React from 'react'
import "../styles/components/navbar.css"
// import { menuItem } from './Sidebar'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Navbar () {
  // const item = menuItem[0] 
  const location = useLocation();
  const [Default, setDefault] = useState()
  const nav = location.pathname.split("/")[1]
  useEffect(() => {
    if(location.pathname != "/"){
      setDefault( nav)
    } else {
      setDefault("Home") 
    }
  });
   

  // const nav = (location.pathname)
  //   if (nav === "/") {
  //     nav === "Home"
  //   } else {
  //     nav = (location.pathname.split("/")[1])
  //   }

  return (
    <div className='nav-container'>
        <nav>            
           <a href="">

              <span className="nav_kiri">{Default}</span>

           </a> 
            <a href="/Add"><span className='nav_kanan'>Add Post</span></a>
        </nav>
    </div>
  )
}
