import { Input } from 'postcss'
import React from 'react'

const Search = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-400 w-full h-64 sm:h-80 px-4 py-14"> 
            <div className="">
                <h1 className="text-5xl font-bold text-center text-white mt-20 mx-auto">Find Your Table For Any Occasion</h1>
            </div>
            <div className="flex justify-center mt-10"> 
                <input type="date" id="date" name="date" className="w-auto h-14 bg-teal-100 rounded-l-xl px-4 py-4 text-lg hover:shadow-md hover:shadow-teal-600 hover:bg-white duration-300 mr-1"></input>
                <select name="time" id="time" className="w-auto h-14 bg-teal-100 text-base px-4 py-4 hover:shadow-md hover:shadow-teal-600 hover:bg-white duration-300 mr-1">
                    <option disabled={true} value="">Select your time</option>
                    <option value="10">10:00 am</option>
                    <option value="12">12:00pm</option>
                    <option value="4">4:00pm</option>
                    <option value="6">6:00pm</option>
                </select>
                <select name="count" id="count" className="w-auto h-14 bg-teal-100 hover:bg-white text-base px-4 py-4 rounded-r-xl hover:shadow-md hover:shadow-teal-600 duration-300">
                    <option disabled={true} value="" className="">Person count</option>
                    <option value="2">2 persons</option>
                    <option value="4">4 persons</option>
                    <option value="6">6 persons</option>
                    <option value="8">8 persons</option>
                </select>
                <input type="text" placeholder="Search Restaurants" className="ml-10 rounded-xl px-4 py-4 bg-teal-100 hover:bg-white hover:shadow-md hover:shadow-teal-600 duration-300"></input>
                <button className="ml-10 bg-teal-600 text-white font-semibold hover:shadow-md hover:shadow-teal-500 hover:scale-105 duration-300 rounded-xl px-10 py-4">Get start</button>
            </div> 
        </div>
        
  )
}

export default Search