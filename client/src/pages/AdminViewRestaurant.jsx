import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import { useStateContext } from '../contextProviders/ContextProvider'

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


  return (
    <div>AdminViewRestaurant</div>
  )
}

export default AdminViewRestaurant