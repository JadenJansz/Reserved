import axios from 'axios';
import React, {useEffect} from 'react'
import { useState } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider'

const NewReservations = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    const [reservations, setReservations] = useState([]);
    const [restaurantId, setRestaurantId] = useState({});

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
        setRestaurantId(JSON.parse(localStorage.getItem('user')))
      }, [])
      
      useEffect(() => {
        
        getReservations();
    }, [restaurantId])

    const getReservations = async () => {
      console.log(JSON.parse(localStorage.getItem('user')));
      try {
        const response = await axios.get("http://localhost:8800/current_reservations", { params: {id: restaurantId}})
        setReservations(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      <AdminNavBar/>
      <div className="flex mt-28 px-16">
        <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>Here are the upcoming reservations</h1>
        <input type="text" placeholder="Search a reservation" className="rounded-lg px-4 py-4 bg-teal-100 w-96 h-10 ml-32 border-0"></input>
        <button className="w-28 h-10 text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2 ml-4 mt-2">Search</button>
      </div>
      <div className='border-2 border-teal-500 rounded-2xl mx-16 h-max mt-2'>
        {
          reservations.length > 0 && (
            reservations.map((reservation) => (
              
              <NewReservationCard key={reservation.ResrvationID} reservation={reservation} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default NewReservations