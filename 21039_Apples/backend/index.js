import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"21039_apples"
})


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

 app.get("/",(req,res)=>{
     const q="SELECT * FROM books"
     db.query(q,(err,data)=>{
         if(err) return res.json(err)
         return res.json(data)
     })
 })

app.post("/",(req,res)=>{
    const q ="INSERT INTO users (`nickname`,`password`) VALUES (?)";
    const values=[
        req.body.nickname,
        req.body.password
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been added.")
    })

})

 app.delete("/book/:id", (req,res)=>{
     const bookId=req.params.id;
     const q="DELETE FROM books WHERE id=?"

     db.query(q,[bookId],(err,data)=>{
         if(err) return res.json(err)
         return res.json("Book has been deleted.")
     })
 })

 app.put("/book/:id", (req,res)=>{
     const bookId=req.params.id;
     const q="UPDATE books SET `title`=?,`desc`=?,`price`=?,`cover`=? WHERE id=?"
     const values=[
         req.body.title,
         req.body.desc,
         req.body.price,
         req.body.cover
     ]
     db.query(q,[...values, bookId],(err,data)=>{
         if(err) return res.json(err)
         return res.json("Book has been updated.")
     })
 })

app.listen(3306,()=>{
    console.log("Connect to backend.")
})