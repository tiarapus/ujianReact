import React from 'react'
import "../styles/components/sidebar.css"
import { Icon } from '@iconify/react';
import logo from '../img/quotes.png'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/navbar'

const Sidebar = ({children}) => {
    const menuItem = [
    {
        path:"/Explore",
        name:"Explore",
        icon:<Icon icon="mingcute:search-2-fill" />
    },
    {
        path:"/",
        name:"Home",
        icon:<Icon icon="mingcute:home-3-fill" />
        
    },
    {
        path:"/Notifications",
        name:"Notifications",
        icon:<Icon icon="material-symbols:circle-notifications-rounded" />
    },
    {
        path:"/Profile",
        name:"Profile",
        icon:<Icon icon="pajamas:profile" />
    }
    // ,
    // {
    //     path:"/logout",
    //     name:"logout",
    //     icon:<Icon icon="tabler:logout" />
    // }
  ]
    
    // const [isScroll, setScroll] = useState(false)
    // function setSticki() {
    //     if (window.pageYOffset >= 0) {
    //       setScroll(true)
    //     } else {
    //       setScroll(false)
    //     }
    //   }
    //   window.addEventListener("scroll", setSticki)

    

  return (
    <div className='container'>
        <div className='sidebar'>
            <div className='header'>
                <img src={logo} alt="" />
                <div className='logotext'></div>
            </div>
            
            <div className="menu">
            {
                   menuItem.map((item, index)=>(
                    <div className="link">
                       <a href={item.path} key={index} >
                           <i className="icon">{item.icon}</i>
                           <span className="menu_item" >{item.name}</span>
                       </a>
                    </div>
                   ))
               }
            </div>
        </div>
        <main>
            <Navbar />
            {children}
        </main>
    </div>
  )
}

// export dafault{menuItem}

export default Sidebar
