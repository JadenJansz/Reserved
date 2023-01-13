import React, {useEffect, useState} from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'
import axios from 'axios';


const OldReservations = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
    }, [])

    const getReservations = async () => {
      try {
        const response = await axios.get("http://localhost:8800/current_reservations")
        setReservations(response.data)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>OldReservations</div>
  )
}

export default OldReservations