import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router'
import NavBar from '../components/NavBar'
import Taj from "../assets/taj.jpg"
import Hilton from "../assets/hilton.jpg"
import Iframe from 'react-iframe'

const CustomerViewRestaurant = () => {

    const [restaurant, setRestaurant] = useState({});

    const { state } = useLocation();
    console.log(state);
    
    useEffect(() => {
        
        setRestaurant(state)
    },[])
    
  return (
    <div>
      <NavBar />
      {/* <h1>{restaurant.Name}</h1> */}
      <div className="w-full h-80">
        <img src={Taj} className="w-screen h-96"></img>
      </div>
      <div className="flex mt-28 mx-24 justify-between">
        <div className="w-[850px] h-max pr-6">
          <h1 className="text-4xl font-bold text-gray-800">Taj Samudra - The Restaurant</h1>
          <h2 className="text-lg text-gray-500 mt-2">Galle face center road - Colombo 08, Sri Lanka</h2>
          <div className="flex justify-between my-8 pb-2 border-b-2 border-teal-500">
            <h1 className="text-base text-gray-800 font-semibold">115 Reviews</h1>
            <h1 className="text-base text-gray-800 font-semibold">Starting from $20</h1>
            <h1 className="text-base text-gray-800 font-semibold">Multiple dining options</h1>
          </div>
          <h1 className="text-sm text-gray-800 font-normal">
             Set on 4.5 hectares of lush gardens across from the Laccadive Sea, this upscale hotel is 2 km from 
            Gangaramaya Temple and 5 km from the Port of Colombo.
             Offering balconies with city or ocean views, the sophisticated rooms feature minibars, free Wi-Fi and flat-screen TVs, 
             plus tea and coffeemaking facilities. Suites add living rooms and/or dining rooms. 
             There is 24-hour room service. 
              Breakfast is free. There are upscale Chinese, Indian and Japanese restaurants, plus a hip coffee shop and 2 
            elegant lounges. Other amenities include an outdoor pool and tennis courts, plus a fitness centre and a 
            business centre.</h1>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">Photos</h1>
            <div className="flex justify-center space-x-4 mt-8 mb-20">
              <div>
                <img src={Hilton} className="w-96 h-60 rounded-lg"></img>
              </div>
              <div>
                <div className="flex justify-between mb-4">
                  <img src={Hilton} className="w-48 h-28 mr-4 rounded-md"></img>
                  <img src={Hilton} className="w-48 h-28 rounded-md"></img>
                </div>
                <div className="flex justify-between">
                  <img src={Hilton} className="w-48 h-28 mr-4 rounded-md"></img>
                  <img src={Hilton} className="w-48 h-28 rounded-md"></img>
                </div>
              </div>
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
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">What people are saying</h1>
            <div className="block py-10">
              <div className="flex justify-between bg-teal-100 rounded-2xl">
                <img src={Hilton} className="w-32 h-32 mr-4 rounded-full m-8"></img>
                <div className="block">
                    <div className="flex justify-between py-6 px-8">
                      <h1 className="text-base text-gray-800 font-semibold">Edward Raymond Finn</h1>
                      <h1 className="text-base text-gray-800 font-semibold">*****</h1>
                      <h1 className="text-base text-gray-800 font-semibold">5th Dec 2022</h1>
                    </div>
                    <p className="px-8 pb-4 text-sm">
                      First night in Colombo so ate in The Taj Samudra as it was raining heavily. 
                      Meal was cheap by western standards but expensive by local. 
                      Food was good not great. Good buffet option with fish and crab cooked to order.
                    </p>
                </div>
              </div>
            </div>
        </div>
        <div>
          <div className="block w-[400px] border-2 border-teal-500 rounded-lg p-6 mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Make a reservation</h1>
            <input type="date" id="date" name="date" className="w-full h-12 mb-4 bg-teal-100 rounded-lg px-4 text-sm border-0" /><br />
            <select name="time" id="time" className="w-full h-12 mb-4 bg-teal-100 text-sm px-4 rounded-lg"><br />
              <option disabled={true}>Select your time</option>
              <option value="10.30 AM">10:30 AM</option>
              <option value="12">12:00pm</option>
              <option value="4">4:00pm</option>
              <option value="6">6:00pm</option>
            </select>
            <select name="count" id="count" className="w-full h-12 mb-8 bg-teal-100 text-sm px-4 rounded-lg">
              <option disabled={true} className="">Person count</option><br />
              <option value="2">2 persons</option>
              <option value="4">4 persons</option>
              <option value="6">6 persons</option>
              <option value="8">8 persons</option>
            </select>
            <button className="w-full h-12 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-lg px-6"> Check Availability </button>
          </div>
          <div className="block w-[400px] border-2 border-teal-500 rounded-lg py-6">
            <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Location</h1>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.926893021824!2d79.8467957!3d6.9226396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a84fafa80297e3f!2sTaj%20Samudra%2C%20Colombo!5e0!3m2!1sen!2slk!4v1673443162058!5m2!1sen!2slk" 
            className="w-[396px] h-72"></Iframe>
            <h1 className="text-base font-semibold text-gray-700 mt-4 px-10 text-center">25, Galle Face center road, Colombo 8000</h1>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default CustomerViewRestaurant