import React, {useEffect} from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'

const NewReservations = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
    }, [])

  return (
    <div>NewReservations</div>
  )
}

export default NewReservations