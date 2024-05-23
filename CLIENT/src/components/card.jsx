import React from 'react'
import "../styles/components/card.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from '@iconify/react';
const Card = () => {

  const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchAllPosts= async () =>{
            try {
                const res = await axios.get("http://localhost:8000/posts")
                setPosts(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllPosts()
    },[])

    const handleDelete = async (id) => {
      try {
        await axios.delete("http://localhost:8000/posts/"+id)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
  // const quotes = [
  //   {
  //     name : "Tiara Puspita",
  //     title : "Manusia biasa",
  //     isi : "Bukan tempatnya yang sempit, hatinya saja yang kurang lapang. Bukan rezekinya yang sedikit, bersyukurnya saja yang kurang."
  //   },
  //   {
  //     name : "Jongin Kim",
  //     title : "Alien dari exo",
  //     isi : "after all this time, we live and survive with hopes."
  //   },
  //   {
  //     name : "Jennie Kim",
  //     title : "Blackpink",
  //     isi : "blackpink in ur area"
  //   },
  //   {
  //     name : "Jongdae Chen",
  //     title : "papa muda",
  //     isi : "diam seperti cupu, bergerak ternyata suhu"
  //   },
  //   {
  //     name : "Suho Cotton",
  //     title : "sugar dedi",
  //     isi : "Hamburkanlah uang uang mu, beli album ku"
  //   }
  // ]
  return (
    <div className='container-card'>
      {
      posts.map(item => (
        <div className="card" key={item.id}>
            <div className="header">
                <img src={`https://source.unsplash.com/random/300x300/?${item.nama}`} alt="" />
                <div className="text">
                  <div className="campur">
                      <span className='name'>{item.nama}</span>
                      <div className="icons">
                          <a href={`/Edit/${item.id}`}><i><Icon icon="material-symbols:edit-outline" /></i></a>
                          <a href="" onClick={()=>handleDelete(item.id)}><i><Icon icon="material-symbols:delete-rounded" /></i></a>
                      </div>
                  </div>
                    <span className='title'>{item.title}</span>
                </div>
                
            </div>
            <div className="content">
              <div className="quotes">
                "{item.content}"
              </div>
            </div>
        </div>
      ))
      }
    </div>
  )
}

export default Card
