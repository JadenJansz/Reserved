import React, { useEffect } from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'

const AdminViewRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
    }, [])


  return (
    <div>AdminViewRestaurant</div>
  )
}

export default AdminViewRestaurant