import React from 'react'
import { Link } from 'react-router-dom'
import Join from "../assets/resjoin.jpg"
import { Link, useNavigate } from 'react-router-dom'

const ResJoin = () => {
  return (
    <div  className="bg-white w-full h-max px-4 py-10 mt-64 justify-center">
        <div className="relative border-t-2 border-teal-100 mx-24">
            <h2 className="absolute text-4xl font-semibold text-white top-28 text-center left-0 right-0">
                Hello Owners !
            </h2>
            <p className="absolute text-xl font-medium text-white top-48 text-center left-0 right-0">
                More than 100+ restaurants already available in our website.<br/>
                Join with us today to manage and complete <br/>
                your reservations through Reserved.com<br/>
            </p>
            <Link to='/restaurant_signup'>
              <button className="absolute mx-auto w-60 left-0 right-0 top-80 h-14 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-xl px-10 py-4">Join with us</button>
            </Link>
            <img className="w-11/12 rounded-3xl h-full mt-10 mx-auto" src={Join} alt="" />
        </div>
    </div>
  )
}

export default ResJoin