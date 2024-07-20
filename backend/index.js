const express = require("express")
require("dotenv").config()
const cors = require("cors")
const imgRouter = require("./routes/image.router")


const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/", (req,res) => {
    res.send("Welcome, darthman")
})

app.use("/image", imgRouter)    





app.listen(port, (req,res) => {
    console.log(`App is listening in http://localhost:${port}`)
})


