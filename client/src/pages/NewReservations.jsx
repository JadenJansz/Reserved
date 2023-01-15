import axios from 'axios';
import React, {useEffect} from 'react'
import { useState } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'

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
    <div>
      <AdminNavBar/>
      <div className="flex mt-28 px-16">
        <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>Here are the upcoming reservations</h1>
        <input type="text" placeholder="Search a reservation" className="rounded-lg px-4 py-4 bg-teal-100 w-96 h-10 ml-32 border-0"></input>
        <button className="w-28 h-10 text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2 ml-4 mt-2">Search</button>
      </div>
      <div className='border-2 border-teal-500 rounded-2xl mx-16 h-max mt-2'>
        <div className='m-4 bg-teal-100 rounded-xl'>
          <div className='flex ml-10 pt-4'> 
            <h1 className='text-lg font-medium text-teal-600 mb-2 mt-2'>Reservation No:</h1>
            <h1 className='text-lg font-semibold text-teal-600 mb-2 mt-2 ml-2'>121</h1>
          </div>
          <div className='flex justify-between px-10'>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Customer Name:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>James Anthony</h1>
            </div>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Table No:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>A1011</h1>
            </div>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Person Count:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>4 persons</h1>
            </div>
          </div>
          <div className='flex px-10'>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Date:</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>15-01-2023</h1>
            </div>
            <div className='flex ml-80'> 
              <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Time:</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>6:00pm</h1>
              <h1 className='text-sm font-medium text-gray-700 ml-2 mt-0.5'>-</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>7:00pm</h1>
            </div>
          </div>
          <button className="w-48 h-10 ml-[410px] text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2 mt-6 mb-4">End reservation</button>
        </div>
      </div>
    </div>
  )
}

export default NewReservations