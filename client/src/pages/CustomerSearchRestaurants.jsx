import React from 'react'
import { useEffect } from 'react';
import Search from '../components/Search'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

const CustomerSearchRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);

    const { state } = useLocation();
    // console.log(state);

    const getRestaurants = async () => {
        try {
            const response = await axios.get("http://localhost:8800/restaurants", { params: state } )
            console.log(response.data)
            setRestaurants(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {

        getRestaurants();
    }, [])
    
    useEffect(() => {
        
        // console.log(restaurants)
    }, [restaurants])
    
  return (
    <div>
        <NavBar />
        <Search />
        <div className='px-28 mt-10 w-screen'>
            <h1 className='text-2xl font-semibold text-black border-y-2 border-teal-100 pt-10 pb-4'>Here are the available restaurants for your search</h1>
            {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.RestaurantID} restaurant={restaurant} />
            ))}
        </div>
    </div>
  )
}

export default CustomerSearchRestaurants