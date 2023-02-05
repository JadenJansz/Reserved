import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'
import Taj from "../assets/taj.jpg"
import Hilton from "../assets/hilton.jpg"
import Iframe from 'react-iframe'
import { useState } from "react";
import Popup from '../components/Warning'

const AdminViewRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const [images, setImages] = useState([])
  const { state } = useLocation();
  const navigation = useNavigate();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
        setImages(JSON.parse(state.Image))
        console.log(images.length)
    }, [])

  const removeData = async (id) => {
   try {
    const response = await axios.delete('http://localhost:8800/delete_restaurant/'+id);
    console.log(response);

    navigation('/admin_view_restaurants')

   } catch (error) {
    console.log(error);
   } 
  }

  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
      setIsOpen(!isOpen);
  } 

  return (
    <div>
      <AdminNavBar />
      <div className="flex mt-28 px-16">
            <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>Full details</h1>
      </div>
      <div className="mt-2 px-16 justify-between">
        <div className="w-[1000px] h-max">
          <h1 className="text-4xl font-bold text-gray-800">{state.Name}</h1>
          <h2 className="text-lg text-gray-500 mt-2 pb-4 border-b-2 border-teal-500">{state.AddressLine1} {state.AddressLine2} {state.AddressLine3}</h2>
          <h1 className="text-sm text-gray-800 font-normal mt-8 mb-6">
            {state.Facilities} 
            </h1>
            <div>
          <div className='border-t-2 border-teal-500'>
            <div className="block w-[400px] border-2 border-teal-500 rounded-lg py-6 mt-8">
              <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Location</h1>
              <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.926893021824!2d79.8467957!3d6.9226396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a84fafa80297e3f!2sTaj%20Samudra%2C%20Colombo!5e0!3m2!1sen!2slk!4v1673443162058!5m2!1sen!2slk" 
              className="w-[396px] h-72"></Iframe>
              <h1 className="text-base font-semibold text-gray-700 mt-4 px-10 text-center">{state.AddressLine1} {state.AddressLine2} {state.AddressLine3}</h1>
            </div>
          </div>
        </div>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">Photos</h1>
            <div className="flex justify-center space-x-2 mt-8 mb-20">
              {
                images && (
                  images.map((image) => (
                    <img className="w-48 h-36 rounded-md" src={`http://localhost:8800/${image}`} alt='image' width={100} height={100} />
  
                  ))

                )
              }
            </div>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500 mb-8">Menu</h1>
            <embed src={`http://localhost:8800/${state.Menu != undefined ? JSON.parse(state.Menu)[0] : 'placeholder.jpg'}`} type="application/pdf" width="100%" height="650px"  />
        </div>
        <div className='my-24 ml-96'>
          <button onClick={togglePopup} className="w-72 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Remove restaurant</button>
        </div>
        {isOpen && <Popup
          content={<>
            <div className="">
              <h1 className="text-3xl font-bold mb-8 text-center">Warning !</h1>
              <h1 className="text-base text-gray-700 font-semibold mt-8 text-center mx-4">Are you sure about removing this restaurant from the system ? This cannot be undone if proceeded !</h1>
              <div className="flex justify-center space-x-6 mt-10 mb-4">
                <button className="w-48 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2" onClick={() => removeData(state.RestaurantID)}>Yes, Remove</button>
                <button className="w-48 h-12 text-sm bg-teal-100 text-gray-700 font-medium hover:bg-teal-300 duration-300 rounded-md px-2" onClick={togglePopup}>Cancel process</button>
            </div>                
            </div>
          </>}
          handleClose={togglePopup}
          />}
      </div>
    </div>
  )
}

export default AdminViewRestaurant