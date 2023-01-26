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
          <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>{review.Date.substring(0,10)}</h1>
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
      <div className='block px-8 pt-2'>
          <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Message:</h1>
          <h1 className='text-base font-semibold text-gray-700 '>
              {review.Comment}
          </h1>
      </div>
    </div>
  )
}

export default RestaurantViewReview