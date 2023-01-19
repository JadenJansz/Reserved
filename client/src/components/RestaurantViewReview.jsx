import React from 'react'
import { FaStar } from "react-icons/fa"

const RestaurantViewReview = ({ review }) => {
  return (
    <div className='m-4 bg-teal-100 rounded-xl pb-8'>
      <h1 className='text-lg font-medium text-teal-600 ml-8 mb-2 pt-6'>New customer review</h1>
      <div className='flex justify-between px-8'>
        <div className='flex'> 
          <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Customer Name:</h1>
          <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>James Anthony</h1>
        </div>
        <div className='flex'> 
          <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Date:</h1>
          <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>15-01-2023</h1>
        </div>
        <div className='flex'> 
          <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5 mr-1'>Rating:</h1>
          <FaStar size={20} className="text-yellow-400 ml-1"/>
          <FaStar size={20} className="text-yellow-400 ml-1"/>
          <FaStar size={20} className="text-yellow-400 ml-1"/>
          <FaStar size={20} className="text-yellow-400 ml-1"/>
          <FaStar size={20} className="text-yellow-400 ml-1"/>
        </div>
      </div>
      <div className='flex px-8 pt-2'>
          <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Message:</h1>
          <h1 className='text-base font-semibold text-gray-700 ml-2'>
              First night in Colombo so ate in The Taj Samudra as it was raining heavily. 
              Meal was cheap by western standards but expensive by local. 
              Food was good not great. Good buffet option with fish and crab cooked to order.
          </h1>
      </div>
    </div>
  )
}

export default RestaurantViewReview