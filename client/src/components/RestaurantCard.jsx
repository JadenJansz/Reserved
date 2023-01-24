import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { FaStar } from "react-icons/fa"
import Hilton from "../assets/hilton.jpg"

const RestaurantCard = ({ restaurant }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view_restaurant', {state: restaurant});
  }

  return (
    <div className='w-full py-10 border-b-2 border-teal-100' onClick={handleClick}>
      <div className='flex justify-start space-x-10 pl-10'>
        <div>
        <img src={Hilton} className="w-72 h-max rounded-lg"></img>
        </div>
        <div>
          <h3 className='text-2xl text-gray-700 font-semibold'>{restaurant.Name}</h3>
          <h3 className='text-lg text-gray-400 font-medium mb-6'>Bambalapitiya, Colombo -  Sri Lanka.</h3>
          <div className='flex mb-8'>
            <FaStar size={20} className="text-yellow-400 ml-1"/>
            <FaStar size={20} className="text-yellow-400 ml-1"/>
            <FaStar size={20} className="text-yellow-400 ml-1"/>
            <FaStar size={20} className="text-yellow-400 ml-1"/>
            <FaStar size={20} className="text-yellow-400 ml-1"/>
            <h1 className='text-sm font-semibold text-gray-500 mt-0.5 ml-2'>(115 reviews)</h1>
          </div>
          <button className="mx-auto w-72 h-14 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-xl px-10 py-4" onClick={handleClick}>Make a reservation</button>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard