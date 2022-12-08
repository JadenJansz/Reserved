import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

const AdminViewRestaurant = () => {
  
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('http://localhost:8800/review');
                console.log(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchRestaurants();
    }, [])
  
    return (
    <div>

    </div>
  )
}

export default AdminViewRestaurant