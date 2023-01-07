import React, {useEffect} from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'

const OldReservations = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
    }, [])

  return (
    <div>OldReservations</div>
  )
}

export default OldReservations