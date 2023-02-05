import React from 'react'
import LoginHero from "../assets/LoginHero.jpg"

const AdminLogout = () => {
  return (
    <div>
        <img src={LoginHero} className="relative w-screen h-screen"></img>
        <div className="absolute flex top-36 left-[680px]">
            <h1 className="font-bold text-3xl font-logo text-white">Reserved</h1>
            <h2 className="ml-1 mt-2.5 text-base font-logo text-white">.com</h2>
        </div>
        <div className="absolute w-[400px] top-52 left-[570px] bg-white py-12 px-6 rounded-2xl mt-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Sign out</h1>
            <div className="">
              <h1 className="text-base text-gray-700 font-semibold mt-8 text-center mx-4">Are you sure you want to sign out !</h1>
              <div className="flex justify-center space-x-6 mt-10 mb-4">
                <button className="w-48 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Yes, Sign out</button>
                <button className="w-48 h-12 text-sm bg-teal-100 text-gray-700 font-medium hover:bg-teal-300 duration-300 rounded-md px-2">Cancel process</button>
            </div>                
            </div>
        </div>
        <div className="absolute bottom-36 left-[630px]">
            <h2 className="text-sm font-logo text-white opacity-50">@ 2022 Reserved.com All rights reserved</h2>
        </div>
    </div>
  )
}

export default AdminLogout