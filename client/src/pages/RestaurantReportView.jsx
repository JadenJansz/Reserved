import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { useStateContext } from '../contextProviders/ContextProvider';

const RestaurantReportView = () => {

    const { sidebarActive, setSidebarActive ,setRestaurantSidebar, setSession } = useStateContext();
  
  useEffect(() => {
    setSidebarActive(false);
    setRestaurantSidebar(false)
  }, [])

  const { state } = useLocation();
  const [keys, setKeys] = useState([]);

  useState(() => {
    if(state.data.length !== 0){
      console.log(state)
      setKeys(Object.keys(state.data[0]));

    }
  }, [])


  return (
    <div className='w-auto m-auto h-auto relative my-20 rounded-lg border-2 border-teal-500 py-5 px-10 overflow-auto'>
        <div className="container mb-4 p-3">
          <div className="flex text-black font-logo p-auto">
            <h1 className="font-bold text-4xl ml-36">Reserved</h1>
            <h2 className="ml-1 mt-4 text-base">.com</h2>
          </div>
        </div>
          <div className="container">
            {state.data.length === 0 ? (
              "You currently have no data created"
            ) : (
              <>
              <h3 className='font-semibold text-xl text-gray-800 py-2 px-2'>Monthly Reservation Report</h3>
              <h3 className='font-medium text-lg text-gray-900 py-1 px-2'>Year : {state.criteria.year}</h3>
              <h3 className='font-medium text-lg text-gray-900 py-1 px-2'>Month : {state.criteria.month}</h3>
              <table className="table table-auto mt-6 min-w-full">
                <thead className='bg-white border-b'>
                  <tr>
                      <th scope="col" className='text-lg font-medium text-gray-900 px-6 py-4 text-left'>Date</th>
                      <th scope="col" className='text-lg font-medium text-gray-900 pl-4 pr-10 py-4 text-left'>Time</th>
                      <th scope="col" className='text-lg font-medium text-gray-900 pr-6 pl-10 py-4 text-left'>Table Size</th>
                  </tr>
                </thead>
                <tbody>
                  {state.data.map(restaurant => (
                    <tr key={restaurant.ReservationID} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">{restaurant.Date.substring(0,10)}</td>
                      <td class="text-base text-left text-gray-900 font-light px-6 py-4 whitespace-nowrap">{restaurant.Time}</td>
                      <td class="text-base text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">{restaurant.TableSize}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className='text-lg font-medium text-gray-900 pt-6 text-left'>Total Number of Reservations : </td>
                    <td className='text-base text-gray-900 font-light px-6 pt-6 whitespace-nowrap'>{state.data.length}</td>
                  </tr>
                </tbody>
              </table>
              </>
            )}
          </div>
          <div className="noprint">
              <button
                className="btn btn-primary w-auto ml-44 mt-6 h-12 bg-teal-500 text-lg font-medium text-white px-4 hover:bg-teal-700 duration-300 rounded-lg"
                onClick={() => window.print()}
              >
                Generate PDF
              </button>
          </div>
      </div>
  )
}

export default RestaurantReportView