import axios from 'axios';
import React, {useEffect} from 'react'
import { useState } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider'

const NewReservations = () => {

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
    <div>NewReservations</div>
  )
}

export default NewReservations