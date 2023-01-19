import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'
import Taj from "../assets/taj.jpg"
import Hilton from "../assets/hilton.jpg"
import Iframe from 'react-iframe'
import { useState } from "react";
import Popup from '../components/Warning'

const AdminViewRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const { state } = useLocation();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
    }, [])

  const removeData = async (id) => {
   try {
    await axios.delete('http://localhost:8800/delete_restaurant/'+id);
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
          <h1 className="text-4xl font-bold text-gray-800">Taj Samudra - The Restaurant</h1>
          <h2 className="text-lg text-gray-500 mt-2 pb-4 border-b-2 border-teal-500">Galle face center road - Colombo 08, Sri Lanka</h2>
          <h1 className="text-sm text-gray-800 font-normal mt-8 mb-6">
             Set on 4.5 hectares of lush gardens across from the Laccadive Sea, this upscale hotel is 2 km from 
            Gangaramaya Temple and 5 km from the Port of Colombo.
             Offering balconies with city or ocean views, the sophisticated rooms feature minibars, free Wi-Fi and flat-screen TVs, 
             plus tea and coffeemaking facilities. Suites add living rooms and/or dining rooms. 
             There is 24-hour room service. 
              Breakfast is free. There are upscale Chinese, Indian and Japanese restaurants, plus a hip coffee shop and 2 
            elegant lounges. Other amenities include an outdoor pool and tennis courts, plus a fitness centre and a 
            business centre.</h1>
            <div>
          <div className='border-t-2 border-teal-500'>
            <div className="block w-[400px] border-2 border-teal-500 rounded-lg py-6 mt-8">
              <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Location</h1>
              <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.926893021824!2d79.8467957!3d6.9226396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a84fafa80297e3f!2sTaj%20Samudra%2C%20Colombo!5e0!3m2!1sen!2slk!4v1673443162058!5m2!1sen!2slk" 
              className="w-[396px] h-72"></Iframe>
              <h1 className="text-base font-semibold text-gray-700 mt-4 px-10 text-center">25, Galle Face center road, Colombo 8000</h1>
            </div>
          </div>
        </div>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">Photos</h1>
            <div className="flex justify-center space-x-2 mt-8 mb-20">
                  <img src={Hilton} className="w-48 h-36 rounded-md"/>
                  <img src={Hilton} className="w-48 h-36 rounded-md"/>
                  <img src={Hilton} className="w-48 h-36 rounded-md"/>
                  <img src={Hilton} className="w-48 h-36 rounded-md"/>
                  <img src={Hilton} className="w-48 h-36 rounded-md"/>
            </div>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">Menu</h1>
            <h1 className="text-sm text-gray-800 font-normal mt-6">
              Seafood & Sri Lankan Buffet
              Rs 2750++++. Extra charge will be levied for the following items: Live Crab, Jumbo Prawns, Lobster

                Salad Bar
                Soup
                Fried Rice
                Steamed Rice
                Egg & Vegetable Noodles
                Chicken Curry
                Fish Curry
                Mutton Curry
                Cashew Curry & Vegetarian Dishes
                Red & White String Hoppers
                Raw & Seafood Buffet
                including the following items: Modha, Seer, Mullet, Garoupa, Cuttlefish, Prawns, Crab etc.
                Hoppers, Kottu & Roti Pittu
                Dessert Buffet of Six Desserts
                Fresh Fruits, Local Sweetmeats
                Ice Cream
                Curd With Treacle
            </h1>
        </div>
        <div className='my-24 ml-96'>
          <button onClick={togglePopup} className="w-72 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Remove restaurant</button>
        </div>
        {isOpen && <Popup
          content={<>
            <div className="">
              <h1 className="text-3xl font-bold mb-8 text-center">Warning !</h1>
              <h1 className="text-base text-gray-700 font-semibold mt-8 text-center mx-4">Are you sure about removing this restaurant from the system ? This cannot be undone after proceed !</h1>
              <div className="flex justify-center space-x-6 mt-10 mb-4">
                <button className="w-48 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Yes, Remove</button>
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