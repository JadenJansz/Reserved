import React,{ useEffect } from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'

const AdminAddRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
    }, [])


  return (
    <div>AdminAddRestaurant</div>
  )
}

export default AdminAddRestaurant