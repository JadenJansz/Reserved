import React from 'react'

const PopularRestaurants = ({ id, src, title, style, details }) => {
  return (
    <div key={id} className={`inline-block mr-4 hover:scale-105 duration-300 rounded-xl border-2 ${style}`}>
        <img className="w-[266px] rounded-t-xl h-44 ease-in-out duration-300" src={src} alt="" />
        <div className="px-2">
            <h2  className="mt-4 text-sm sm:text-lg font-semibold text-gray-700">{title}</h2>
            <p className="text-sm pb-4 text-gray-500">{details}</p>
            <button className="w-full justify-center text-base text-black font-semibold border-2 border-gray-200 hover:bg-teal-600 hover:text-white duration-500 
                            px-4 py-2 mb-2.5 rounded-lg">Check out</button>
        </div>
    </div>
  )
}

export default PopularRestaurants