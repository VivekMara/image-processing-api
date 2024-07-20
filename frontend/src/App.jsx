import axios from "axios"
import { useState } from "react"
function App() {
  function fileUplod(){
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
      setSelectedFile(event.target.files[0])
    }

    const onFileUpload = async() => {
      const formData = new FormData();
      formData.append('key', setSelectedFile)
      try {
        const response = await axios.post("http://localhost:3000/image/upload")
      } catch (error) {
        
      }
    }
  }

  return (
    <>
      <h1>Hello, darthman</h1>
      <form action="http://localhost:3000/image/upload" method="post" encType="multipart/form-data" className="flex flex-col items-center">
        <input type="file" name="avatar"  />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}

export default App
