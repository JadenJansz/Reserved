import React from 'react'
import Hilton from "../assets/hilton.jpg"

const AdminNavBar = () => {
  return (
    <div>
        <div className="w-max h-28 flex justify-between ml-16 pt-4 fixed bg-white">
            <h1 className='w-20 text-3xl font-bold text-gray-700 mt-2'>View Restaurant</h1>
            <input type="text" placeholder="Search" className="rounded-lg px-4 py-4 bg-teal-100 w-96 h-10 ml-48 border-0"></input>
            <div className="flex justify-between">
                <img src={Hilton} className="w-12 h-12 rounded-full mt-2 ml-48"></img>
                <div className="block mt-4 ml-4">
                    <h1 className="text-sm font-semibold text-gray-700 capitalize">Taj Samudra Colombo</h1>
                    <h1 className="text-xs font-normal text-gray-400">admin.alex@taj.lk</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavBar