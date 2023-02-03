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
    <div>
        <div className="container mb-4 mt-4 p-3">
          <div className="row">
              <button
                className="btn btn-primary"
                onClick={() => window.print()}
              >
                Generate PDF
              </button>
          </div>
        </div>
          <div className="container">
            {state.data.length === 0 ? (
              "You currently have no data created"
            ) : (
              <>
              <h3>Monthly Reservation Report</h3>
              <h3>Year : {state.criteria.year}</h3>
              <h3>Month : {state.criteria.month}</h3>
              <table className="table">
                <thead>
                  <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Table Size</th>
                  </tr>
                </thead>
                <tbody>
                  {state.data.map(restaurant => (
                    <tr key={restaurant.ReservationID}>
                      <td>{restaurant.Date.substring(0,10)}</td>
                      <td>{restaurant.Time}</td>
                      <td>{restaurant.TableSize}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total Number of Reservations</td>
                    <td>{state.data.length}</td>
                  </tr>
                </tbody>
              </table>
              </>
            )}
          </div>
      </div>
  )
}

export default RestaurantReportView