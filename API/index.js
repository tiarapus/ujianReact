import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "kutip_crud"
})

app.use(express.json())
app.use(cors())

app.get("/posts", (req, res)=>{
    const q = "SELECT * FROM kutip_baru"
    db.query(q,(err, data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})
app.post("/posts", (req, res)=>{
    const q = "INSERT INTO kutip_baru (`nama`,`title`,`content`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.title,
        req.body.content
    ]
    db.query(q,[values],(err, data)=>{
        if (err) return res.json(err)
        return res.json("kutip_baru created!")
    })
})

app.delete("/posts/:id", (req, res)=>{
    const postsId = req.params.id;
    const q = "DELETE FROM kutip_baru WHERE id = ?"
    
    db.query(q,[postsId],(err, data)=>{
        if (err) return res.json(err)
        return res.json("kutip_baru deleted!")
    })
})

app.put("/posts/:id", (req, res)=>{
    const postsId = req.params.id;
    const q = "UPDATE kutip_baru SET `nama` = ?, `title` = ?, `content` = ? WHERE id = ?"
    const values = [
        req.body.name,
        req.body.title,
        req.body.content
    ]

    db.query(q,[...values, postsId],(err, data)=>{
        if (err) return res.json(err)
        return res.json("kutip_baru updated!")
    })
})

app.listen(8000, ()=>{
    console.log("Connected to backend")
})