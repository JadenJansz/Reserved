import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider';
import AdminViewRestaurant from './AdminViewRestaurant';
import PopularRestaurants from '../components/PopularRestaurants';
import AdminRestaurantCard from '../components/AdminRestaurantCard';

const AdminViewRestaurants = () => {

    const [restaurants, setRestaurants] = useState([])
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
    
    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('http://localhost:8800/admin_view_reataurants');
            console.log(response.data);

            setRestaurants(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchRestaurants();
        setSidebarActive(true);
        setRestaurantSidebar(false);
        console.log('lll')
    }, [])
  
    // <AdminViewRestaurant key={restaurant.RestaurantID} restaurant={restaurant} />
    return (
    <div>
        {
            restaurants.map((restaurant) => (
                <AdminRestaurantCard key={restaurant.RestaurantID} restaurant={restaurant} />
            ))
        }
    </div>
  )
}

export default AdminViewRestaurants