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
    </div>
  )
}

export default RestaurantCard