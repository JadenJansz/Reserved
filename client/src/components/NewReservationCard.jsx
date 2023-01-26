import axios from 'axios';
import React from 'react'

const NewReservationCard = ({ reservation, getReservations }) => {

  const endReservation = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("http://localhost:8800/end_reservation/"+reservation.ReservationID)  
      console.log(response.data);

      if(response.data.changedRows > 0){
        getReservations();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='m-4 bg-teal-100 rounded-xl'>
          <div className='flex ml-10 pt-4'> 
            <h1 className='text-lg font-medium text-teal-600 mb-2 mt-2'>Reservation No:</h1>
            <h1 className='text-lg font-semibold text-teal-600 mb-2 mt-2 ml-2'>121</h1>
          </div>
          <div className='flex justify-between px-10'>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Customer Name:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>{reservation.FirstName + " " + reservation.LastName}</h1>
            </div>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Table No:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>A1011</h1>
            </div>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mb-2 mt-0.5'>Person Count:</h1>
              <h1 className='text-base font-semibold text-gray-700 mb-2 ml-2'>{reservation.TableSize} persons</h1>
            </div>
          </div>
          <div className='flex px-10'>
            <div className='flex'> 
              <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Date:</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>{reservation.Date.substring(0,10)}</h1>
            </div>
            <div className='flex ml-80'> 
              <h1 className='text-sm font-medium text-gray-700 mt-0.5'>Time:</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>{reservation.Time}</h1>
              <h1 className='text-sm font-medium text-gray-700 ml-2 mt-0.5'>-</h1>
              <h1 className='text-base font-semibold text-gray-700 ml-2'>7:00pm</h1>
            </div>
          </div>
          <button onClick={endReservation} className="w-48 h-10 ml-[410px] text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2 mt-6 mb-4">End reservation</button>
        </div>
  )
}

export default NewReservationCard