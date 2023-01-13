import React from 'react'
import NavBar from "../components/NavBar";
import Confirm from "../components/Confirmation";
import Taj from "../assets/taj.jpg"
import Iframe from 'react-iframe'

const CustomerCompleteReservation = () => {
  return (
    <div>
        <NavBar />
        <Confirm />
        <div className="w-[600px] shadow-xl rounded-2xl ml-[450px] mt-6">
            <img src={Taj} className="w-[600px] h-52 rounded-t-xl"></img>
            <h1 className="text-2xl font-semibold text-gray-700 mx-8 mt-4">Taj Samudra - The Restaurant</h1>
            <h1 className="text-base font-normal text-gray-400 mb-2 mx-8">Galle face center road - Colombo 08, Sri Lanka.</h1>
            <div className="flex justify-between mx-8">
                <h1 className="text-base text-gray-500 font-semibold">Dec 12th</h1>
                <h1 className="text-base text-gray-500 font-semibold">6:00pm</h1><h1 className="text-base text-gray-500 font-semibold">7:00pm</h1>
                <h1 className="text-base text-gray-500 font-semibold">4 Persons</h1> 
            </div>
            <div className="flex justify-start mx-8 mt-4">
                {/* <Iframe url="https://goo.gl/maps/zxPaJroK8Aaq6iyc7" className="w-40 h-24 rounded-lg"/> */}
                <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.926893021824!2d79.8467957!3d6.9226396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a84fafa80297e3f!2sTaj%20Samudra%2C%20Colombo!5e0!3m2!1sen!2slk!4v1673443162058!5m2!1sen!2slk" 
                className="w-40 h-24 rounded-lg"></Iframe>
                <p className="text-sm font-bold text-gray-700 ml-6 mt-6">
                    25, Galle Face Center Rd, <br/>
                    Colombo 80000
                </p>
            </div>
            <div className="flex justify-center space-x-6 mt-8 pb-8">
                <button className="w-64 h-12 bg-teal-500 text-white hover:bg-teal-700 duration-300 font-semibold rounded-lg px-6 text-sm">Modify reservation</button>
                <button className="w-64 h-12 bg-teal-100 text-gray-700 hover:bg-teal-200 duration-300 font-semibold rounded-lg px-6 text-sm">Cancel reservation</button>
            </div>
        </div>
    </div>
  )
}

export default CustomerCompleteReservation