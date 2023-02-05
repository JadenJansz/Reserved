import React from 'react'
import { Link } from 'react-router-dom'

const PopularRestaurants = ({ restaurant, style, id }) => {
  return (
    <div key={id} className={`inline-block mr-4 hover:scale-105 duration-300 rounded-xl border-2 border-gray-200`}>
        <img className="w-[266px] rounded-t-xl h-44 ease-in-out duration-300"src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[0] : 'placeholder.jpg'}`} alt="" />
        <div className="px-2">
            <h2  className="mt-4 text-sm sm:text-lg font-semibold text-gray-700">{restaurant.Name}</h2>
            <p className="text-sm pb-4 text-gray-500">{restaurant.AddressLine2}</p>
            <Link to='/view_restaurant' state={restaurant}>
            <button className="w-full justify-center text-base text-gray-700 font-semibold bg-teal-100 hover:bg-teal-300 duration-300 
                            px-4 py-2 mb-2.5 rounded-lg">View details</button>
            </Link>
        </div>
    </div>
  )
}

export default PopularRestaurants