import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router'
import { useStateContext } from '../contextProviders/ContextProvider';
import AdminNavBar from '../components/AdminNavBar'
import ResHero from "../assets/ResHero.jpg"
import ResSecond from "../assets/ResSecond.jpg"
import { FaRegMoneyBillAlt, FaPeopleArrows } from "react-icons/fa"
import { MdRestaurant } from "react-icons/md"
import Linechart from '../components/Linechart'
import Piechart from '../components/Piechart'

const AdminHome = () => {

  //RestaurantId
  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true

  const [restaurant, setRestaurant] = useState([]);
  const [customerCount, setCustomerCount] = useState();
  const [payment, setPayment] = useState();
  const [status, setStatus] = useState();

  const navigatef = () => {
    navigate('/admin_view_restaurants')
  }

  useEffect(() => {
    setSidebarActive(true);
    setRestaurantSidebar(false)
    console.log(sessionStorage.getItem('user'))
    retrieveRestaurant();
  }, [])

  const retrieveRestaurant = async () => {
    const id = JSON.parse(localStorage.getItem('user')).RestaurantID
    
    try {
        const response = await axios.get("http://localhost:8800/admin_view_reataurants")
        
        setRestaurant(response.data)
    } catch (error) {
        console.log(error);
    }

    try {
      const response = await axios.get("http://localhost:8800/get_customer_count")
      console.log(response.data)
      setCustomerCount(response.data[0].count)
    } catch (error) {
        console.log(error);
    }

    try {
      const response = await axios.get("http://localhost:8800/payment_total")
      console.log(response.data[0].amount)
      setPayment(response.data[0].amount)
    } catch (error) {
        console.log(error);
    }

      try {
        const response = await axios.get("http://localhost:8800/reservation_status")
        console.log(response.data)
        setStatus(response.data[0])
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className=''>
      <AdminNavBar/>
      <div className="mt-32 px-16">
        <div className="flex justify-between w-[1120px] h-52 rounded-xl">
          <div className='w-[350px] h-40 rounded-lg bg-teal-100'>
            <div className='flex justify-between'>
              <div className='w-24 h-24 bg-teal-500 rounded-lg mt-8 ml-6 px-5 py-5'>
                <MdRestaurant className='w-14 h-14 text-white'/>
              </div>
              <div className='mt-12 pr-6'>
                <h1 className='text-4xl font-bold text-gray-800 text-right'>{restaurant.length}</h1>
                <h2 className='text-lg font-medium text-gray-800 text-right'>Active Restaurants</h2>
              </div>
            </div>
          </div>
          <div className='w-[350px] h-40 rounded-lg bg-teal-100'>
          <div className='flex justify-between'>
              <div className='w-24 h-24 bg-teal-500 rounded-lg mt-8 ml-6 px-5 py-5'>
                <FaPeopleArrows className='w-14 h-14 text-white'/>
              </div>
              <div className='mt-12 pr-6'>
                <h1 className='text-4xl font-bold text-gray-800 text-right'>{customerCount}</h1>
                <h2 className='text-lg font-medium text-gray-800 text-right'>Active Customers</h2>
              </div>
            </div>
          </div>
          <div className='w-[350px] h-40 rounded-lg bg-teal-100'>
          <div className='flex justify-between'>
              <div className='w-24 h-24 bg-teal-500 rounded-lg mt-8 ml-6 px-5 py-5'>
                <FaRegMoneyBillAlt className='w-14 h-14 text-white'/>
              </div>
              <div className='mt-12 pr-6'>
                <h2 className='text-3xl font-bold text-gray-800 text-right'>Rs. {payment}.00</h2>
                <h2 className='text-lg font-medium text-gray-800 text-right'>Total Revenue</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-10 mt-6">
          <div className="block w-[400px] h-80">
          <h1 className='text-2xl font-medium text-gray-700 mb-4'>Reservation Status</h1>
          {
            status && <Piechart status={status}/>
          }
            
          </div>
          <div className='w-[670px] h-80'>
          <h1 className='text-2xl font-medium text-gray-700 mb-4'>Monthly Income</h1>
            <Linechart/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome