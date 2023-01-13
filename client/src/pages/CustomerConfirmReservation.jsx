import React from 'react'
import NavBar from '../components/NavBar'
import Taj from "../assets/taj.jpg"
import Card from "../assets/visa&master.png"

const CustomerConfirmReservation = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-evenly mx-24 mt-20">
        <div className="w-[900px]">
          <h1 className="text-xl font-semibold text-black mb-6">
            First step completed ! Please fill the below details.
          </h1>
          <div className="flex justify-between w-[700px]">
            <img src={Taj} className="w-56 h-28 rounded-lg"></img>
            <div className="block ml-8">
              <h1 className="text-2xl font-bold text-gray-700">
                Taj Samudra - The Restaurant
              </h1>
              <h3 className="text-lg font-normal text-gray-400 mb-6">
                Galle face center road - Colombo 08, Sri Lanka. 
              </h3>
              <div className="flex justify-between">
                <h1 className="text-base text-gray-500 font-semibold">Dec 12th</h1>
                <h1 className="text-base text-gray-500 font-semibold">6:00pm</h1><h1 className="text-base text-gray-500 font-semibold">7:00pm</h1>
                <h1 className="text-base text-gray-500 font-semibold">4 Persons</h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <h1 className="text-sm font-normal text-teal-500 mb-4 mt-6">Please confirm your reservation within</h1>
            <h1 className="text-sm font-bold text-teal-500 ml-2 mb-4 mt-6">4:59 min</h1>
          </div>
          <h1 className="text-lg font-bold text-gray-700">
            Sign in before filling the reservation details.
          </h1>
          <div className="flex justify-between">
            <div>
              <input type="text" placeholder="First Name" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <input type="text" placeholder="Tel. No" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <input type="text" placeholder="Card No." className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <div className="flex justify-between w-96">
                <input type="text" placeholder="Expire Date" className="rounded-xl px-4 py-4 bg-teal-100 w-44 h-12"></input>
                <input type="text" placeholder="CCV" className="rounded-xl px-4 py-4 bg-teal-100 w-44 h-12"></input>
              </div>
            </div>
            <div>
              <input type="text" placeholder="last Name" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <input type="text" placeholder="Email" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <input type="text" placeholder="Name on card" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12"></input>
              <img src={Card} className="w-36 h-14 mt-2"></img>
            </div>
          </div>
          <button className="w-96 h-12 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-lg px-6 ml-52 mt-10"> Confirm reservation </button>
          <h1 className="text-xs font-normal text-teal-500 mt-6">By clicking “Confirm reservation“ you agree to the Reserved.com Terms & Conditions and Privacy Policy. Please read before confirmation.</h1>
        </div>
        <div className="ml-10 mt-14">
        <h1 className="text-xl font-bold text-gray-700 mb-8">
          What to know before proceed
        </h1>
        <ul className="text-gray-500">
          <li>Please confirm your reservation within</li>
          <li>Please confirm your reservation within</li> 
          <li>Please confirm your reservation within</li> 
          <li>Please confirm your reservation within</li> 
          <li>Please confirm your reservation within</li> 
          <li>Please confirm your reservation within</li>  
        </ul>
      </div>
      </div>
    </div>
  )
}

export default CustomerConfirmReservation