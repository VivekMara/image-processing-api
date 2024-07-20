const {Image} = require('image-js')



const processImg = async(req,res) => {
    console.log(req.file)
    
    const fileName = req.file.fileName
    const destination = req.file.destination
    const path = req.file.path
    const size = req.file.size
    console.log(path)
    const img = await Image.load(path)
    const grey = img.grey()
    grey.save(`output.png`)
    res.sendFile('C:\\code\\image-processing-api\\backend\\output.png')
}

module.exports = {
    processImg
}