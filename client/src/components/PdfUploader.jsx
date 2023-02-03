import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import './lol.css'
import { BiImageAdd } from 'react-icons/bi'

const ImageUploader = ({ id, data }) => {
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
      
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
      
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
      // formData.append("image", selectedImages);
      for (const single_file of selected) {
        formData.append('image', single_file)
      }
      formData.append('id', id)
      try {
        const response = await axios.post("http://localhost:8800/upload_menu", formData, { headers: {'Content-Type': 'multipart/form-data'}});
        console.log(response)
        // window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <section>
        {/* <form onSubmit={uploadImage} > */}
        <label>
          + Add PDF
          <br />
          <input
            type="file"
            name="image"
            onChange={e => setSelected((prev) => [...e.target.files])}
            multiple
            accept="application/pdf"
            />
        </label>
        <br />
  
        {/* <input className='imageText' type="file" multiple /> */}
  
            <button onClick={uploadImage}>
              Upload
            </button>
      </section>
    );
}

export default ImageUploader