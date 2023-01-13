import React from 'react'
import { TiTick } from 'react-icons/ti';

const Confirmation = () => {
  return (
    <div>
        <div className="bg-teal-500 w-screen h-40 px-24 py-14 flex">
            <TiTick className="mt-8 w-12 h-10 text-white"></TiTick>
            <h1 className="text-xl font-medium text-white mt-10">
                Reservation confirmed ! You can cancel or modify the reservation from below.
            </h1>
        </div>
    </div>
  )
}

export default Confirmation