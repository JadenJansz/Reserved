import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiImageAdd } from 'react-icons/bi'

const PdfUploader = ({ id }) => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [selected, setSelected] = useState([])
    const [existImages, setExistImages] = useState([])

    const onSelectFile = () => {
      // const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selected);
      console.log(selectedFilesArray)
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
      
      setSelectedImages(imagesArray);
      
      // FOR BUG IN CHROME
      // selected.target.value = "";
    };
    
    useEffect(() => {

    }, [existImages])
    
    useEffect(() => {
      onSelectFile()
      console.log(selected)
    }, [selected])
    
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
    
    const uploadImage = async (e) => {
      // e.preventDefault();
      const formData = new FormData();
      formData.append("image", selectedImages);
      formData.append('id', id)
      try {
        const response = await axios.post("http://localhost:8800/upload_menu", formData, { headers: {'Content-Type': 'multipart/form-data'}});
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
         <label className='imageLabel' />
          <BiImageAdd className='w-16 h-16'/>
           Browse and add images from your local computer
        {/* <form onSubmit={uploadImage} > */}
        <label>
          + Add Images
          <br />
          <input
            className='imageText'
            type="file"
            name="file"
            onChange={e => setSelected((prev) => [...e.target.files])}
            accept="application/pdf"
            />
        </label>
        <br />
  
        {/* <input className='imageText' type="file" multiple /> */}
  
            <button
            className="upload-btn" onClick={uploadImage}
            >
              Upload PDF
            </button>
    </div>
  )
}

export default PdfUploader