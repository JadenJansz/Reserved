import React, {useEffect} from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'

const RestaurantHome = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
    }, [])

  return (
    <div>RestaurantHome</div>
  )
}

export default RestaurantHome