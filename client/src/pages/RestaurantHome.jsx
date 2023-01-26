import React, {useEffect} from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'
import ResHero from "../assets/ResHero.jpg"
import ResSecond from "../assets/ResSecond.jpg"
import { Link } from 'react-router-dom'

const RestaurantHome = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
    }, [])

  return (
    <div className=''>
      <AdminNavBar/>
      <div className="relative mt-32 px-16">
        <img src={ResHero} className="w-[1120px] h-64 rounded-xl"></img>
        <h2 className="absolute text-3xl font-semibold text-white top-6 text-left left-24 right-0">
          Use upto date<br/>
          images and details to help<br/>
          customers in their reservations<br/>
        </h2>
        <Link to='/update_restaurant'>
          <button className="absolute w-60 left-24 right-0 top-44 h-12 bg-teal-100 text-gray-700 font-semibold hover:bg-teal-300 duration-300 rounded-lg px-10">Update profile</button>
        </Link>
        <div className="flex justify-center space-x-16 mt-10">
          <div className="block">
            <h1 className='text-2xl font-medium text-gray-700 mt-2 mb-6'>Recent reviews</h1>
            <div className="flex w-[500px] bg-teal-100 rounded-lg p-4 mt-4">
              <div className="block w-[300px]">
                <h1 className='text-lg font-medium text-teal-600'>New review update</h1>
                <p className="w-52 text-xs font-normal text-gray-700">
                  you have a new update from customer James Pattingson.
                </p>
              </div>
              <div className="flex justify-between space-x-4 mt-2">
                <button className="w-20 h-12 bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2">View</button>
                <button className="w-20 h-12 bg-teal-100 text-gray-700 font-medium hover:bg-teal-300 duration-300 rounded-md px-2">Dismiss</button>
              </div>
            </div>
            <div className="flex w-[500px] bg-teal-100 rounded-lg p-4 mt-4">
              <div className="block w-[300px]">
                <h1 className='text-lg font-medium text-teal-600'>New review update</h1>
                <p className="w-52 text-xs font-normal text-gray-700">
                  you have a new update from customer James Pattingson.
                </p>
              </div>
              <div className="flex justify-between space-x-4 mt-2">
                <Link to='/review'>
                  <button className="w-20 h-12 bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2">View</button>
                </Link>
                <button className="w-20 h-12 bg-teal-100 text-gray-700 font-medium hover:bg-teal-300 duration-300 rounded-md px-2">Dismiss</button>
              </div>
            </div>
          </div>
          <div>
            <img src={ResSecond} className="w-[550px] h-72 rounded-xl"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantHome