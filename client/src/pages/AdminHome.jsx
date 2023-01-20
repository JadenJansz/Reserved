import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router'
import { useStateContext } from '../contextProviders/ContextProvider';

const AdminHome = () => {

  //RestaurantId
  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true

  const navigatef = () => {
    navigate('/admin_view_restaurants')
  }

  useEffect(() => {
    setSidebarActive(true);
    setRestaurantSidebar(false)
    console.log(sessionStorage.getItem('user'))

    axios.get("http://localhost:8800/admin_login").then((response) => {
        console.log(response)
    })

  }, [])
  
  return (
    <div>
      General
    </div>
  )
}

export default AdminHome