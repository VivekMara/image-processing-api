const express = require("express")
const imgRouter = express.Router()

const multer = require("multer")
const upload = multer({dest:'uploads/'})
const imageController = require("../controllers/image.controller.js")

imgRouter.post('/upload', upload.single('avatar'), (req,res) => imageController.processImg(req,res))



module.exports = imgRouter


