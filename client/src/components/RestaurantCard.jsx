import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const RestaurantCard = ({ restaurant }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view_restaurant', {state: restaurant});
  }

  return (
    <div onClick={handleClick}>
      <h3>{restaurant.Name}</h3>
      <h1>Hilton Grand Restaurant</h1>
      <h3>Bambalapitiya, Colombo -  Sri Lanka.</h3>
      <br />
      <h1>*****</h1>
      <button onClick={handleClick}>Make a reservation</button>
    </div>
  )
}

export default RestaurantCard