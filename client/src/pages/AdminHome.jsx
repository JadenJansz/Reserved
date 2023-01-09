import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'
import { useStateContext } from '../contextProviders/ContextProvider';

const AdminHome = () => {

  //RestaurantId
  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  const navigatef = () => {
    navigate('/admin_view_restaurants')
  }

  useEffect(() => {
    setSidebarActive(true);
    setRestaurantSidebar(false)
    console.log(JSON.parse(localStorage.getItem('user')))
  }, [])
  
  return (
    <div>
      General
    </div>
  )
}

export default AdminHome