import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router'

const CustomerViewRestaurant = () => {

    const [restaurant, setRestaurant] = useState({});

    const { state } = useLocation();
    console.log(state);
    
    useEffect(() => {
        
        setRestaurant(state)
    },[])
    
  return (
    <div>
        <h1>{restaurant.Name}</h1>
    </div>
  )
}

export default CustomerViewRestaurant