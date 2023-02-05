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
      console.log(data)
      if(data.Image){
        setExistImages(JSON.parse(data.Image))

      }
    }, [data])
    
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
        const response = await axios.post("http://localhost:8800/upload_images", formData, { headers: {'Content-Type': 'multipart/form-data'}});
        console.log(response)
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }
  
    return (
      <section>
        <label className='' />
        {/* <form onSubmit={uploadImage} > */}
        <label className='imageLabel'>
          <h1 className='text-center text-gray-700 text-lg font-medium'>+ Add Images from your local</h1>
          <br />
          <span>up to 10 images</span>
          <input
            className='imageText'
            type="file"
            name="image"
            onChange={e => setSelected((prev) => [...e.target.files])}
            multiple
            accept="image/png , image/jpeg, image/webp"
            />
        </label>
        <div className='flex w-full justify-center space-x-6 mt-6'>
          {
            existImages.length > 0 && (
              existImages.map((image) => (
                  <img className='uploaderImg' src={`http://localhost:8800/${image}`} alt='image' width={100} height={100} key={image} />
              ))
            )
          }
        </div>
        <br />
  
        {/* <input className='imageText' type="file" multiple /> */}
  
            <button
            className="upload-btn" onClick={uploadImage}
            >
              Upload {selectedImages.length} image
              {selectedImages.length === 1 ? "" : "s"}
            </button>
          {/* </form> */}
  
        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image flex justify-center">
                  <img className='uploaderImg' src={image} height="150" width="150" alt="upload" />
                  <button onClick={() => deleteHandler(image)}>
                    Delete image
                  </button>
                  <p>{index + 1}</p>
                </div>
              );
            })}
        </div>
      </section>
    );
}

export default ImageUploader