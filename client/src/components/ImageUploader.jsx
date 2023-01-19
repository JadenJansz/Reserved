import React, { useState } from 'react'
import './lol.css'
import { BiImageAdd } from 'react-icons/bi'

const ImageUploader = ({ register, errors }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  
      // FOR BUG IN CHROME
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      setSelectedImages(selectedImages.filter((e) => e !== image));
      URL.revokeObjectURL(image);
    }
  
    return (
      <section>
        <label className='imageLabel'>
          <BiImageAdd className='w-16 h-16'/>
           Browse and add images from your local computer
          <br />
          <span>up to 10 images</span>
          <input
            className='imageText'
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <br />
  
        <input className='imageText' type="file" multiple />
  
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You can't upload more than 10 images! <br />
              <span>
                please delete <b> {selectedImages.length - 10} </b> of them{" "}
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log(selectedImages);
              }}
            >
              Upload {selectedImages.length} image
              {selectedImages.length === 1 ? "" : "s"}
            </button>
          ))}
  
        <div className="images">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="image">
                  <img src={image} height="150" width="150" alt="upload" />
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