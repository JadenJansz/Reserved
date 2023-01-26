import React from 'react'
import { useEffect } from 'react'
import Hilton from "../assets/hilton.jpg"

const AdminNavBar = () => {
  return (
    <div>
        <div className="w-max h-28 flex justify-between ml-16 pt-4 fixed bg-white">
            <h1 className='w-20 text-3xl font-bold text-gray-700 mt-2'>View Restaurant</h1>
            <input type="text" placeholder="Search" className="rounded-lg px-4 py-4 bg-teal-100 w-96 h-10 ml-48 border-0"></input>
            <div className="flex justify-between">
                <img src='https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=' className="w-12 h-12 rounded-full mt-2 ml-48"></img>
                <div className="block mt-4 ml-4">
                    <h1 className="text-sm font-semibold text-gray-700 capitalize">Admin</h1>
                    <h1 className="text-xs font-normal text-gray-400">{JSON.parse(localStorage.getItem('user')).Email ? JSON.parse(localStorage.getItem('user')).Email : JSON.parse(localStorage.getItem('user')).email}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavBar