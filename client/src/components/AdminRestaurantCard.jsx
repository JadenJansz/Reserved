import React from 'react'
import { useNavigate } from 'react-router'
import Hilton from "../assets/hilton.jpg"

const AdminRestaurantCard = ({ restaurant }) => {

  const navigate = useNavigate();

  const viewRestaurant = () => {
    navigate('/admin_view_restaurant', { state: restaurant })
  }

  return (
    <div className='pl-16'>
      {/* <img className="w-[266px] rounded-t-xl h-44 ease-in-out duration-300" src={src} alt="" /> */}
        <div className="flex justify-start space-x-14 px-2 border-b-2 border-teal-100 py-6">
          <img src={Hilton} className="w-72 h-max rounded-lg"></img>
          <div>
            <h2  className="mt-4 text-2xl font-semibold text-gray-700">{restaurant.Name}</h2>
            <p className="text-lg pb-4 text-gray-500 mb-8">{restaurant.AddressLine3}</p>
            <button className="mx-auto w-72 h-12 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-xl px-10" onClick={viewRestaurant}>Check out</button>
          </div>
        </div>
    </div>
  )
}

export default AdminRestaurantCard