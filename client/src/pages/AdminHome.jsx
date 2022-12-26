import React from 'react'
import { useLocation } from 'react-router'

const AdminHome = () => {

  //RestaurantId
  const { state } = useLocation();
  
  return (
    <div>
        <div>
            <h1>View Restaurants</h1>
        </div>
        <div>
            <h1>Add Restaurant</h1>
        </div>
        <div>
            <h1>Remove Restaurant</h1>
        </div>
    </div>
  )
}

export default AdminHome