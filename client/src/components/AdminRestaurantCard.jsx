import React from 'react'
import { useNavigate } from 'react-router'

const AdminRestaurantCard = ({ restaurant }) => {

  const navigate = useNavigate();

  const viewRestaurant = () => {
    navigate('/admin_view_restaurant', { state: restaurant })
  }

  return (
    <div>
      {/* <img className="w-[266px] rounded-t-xl h-44 ease-in-out duration-300" src={src} alt="" /> */}
        <div className="px-2">
            <h2  className="mt-4 text-sm sm:text-lg font-semibold text-gray-700">{restaurant.Name}</h2>
            <p className="text-sm pb-4 text-gray-500">{restaurant.AddressLine3}</p>
            <button className="w-full justify-center text-base text-black font-semibold border-2 border-gray-200 hover:bg-teal-600 hover:text-white duration-500 
                            px-4 py-2 mb-2.5 rounded-lg" onClick={viewRestaurant}>Check out</button>
        </div>
    </div>
  )
}

export default AdminRestaurantCard