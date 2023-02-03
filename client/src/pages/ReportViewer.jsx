import React from 'react'
import generatePDF from '../data/generatePDF'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider';

const ReportViewer = () => {

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

  if(state.criteria.name === 'admin_income_report'){

    return(
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
              <h3>Monthly Icome Report</h3>
              <h3>Year : {state.criteria.year}</h3>
              <h3>Month : {state.criteria.month}</h3>
              <table className="table">
                <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Table Size</th>
                  </tr>
                </thead>
                <tbody>
                  {state.data.map(restaurant => (
                    <tr key={restaurant.ReservationID}>
                      <td>{restaurant.Name}</td>
                      <td>{restaurant.Date.substring(0,10)}</td>
                      <td>{restaurant.TableSize}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Total Number of Reservations</td>
                    <td>{state.data.length}</td>
                  </tr>
                  <tr>
                    <td>Total Income Recieved</td>
                    <td>{state.data.length * 1000}</td>
                  </tr>
                </tbody>
              </table>
              </>
            )}
          </div>
      </div>
    )
  }else{
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
          {/* <ReportViewer data={data} /> */}
            <div className="container">
              {state.data.length === 0 ? (
                "You currently have no data created"
              ) : (
                <>
                <h3>Monthly Restaurant Registration Report</h3>
                <h3>Year : {state.criteria.year}</h3>
                <h3>Month : {state.criteria.month}</h3>
                <table className="table">
                  <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.data.map(restaurant => (
                      <tr key={restaurant.AddressLine1}>
                        <td>{restaurant.Name}</td>
                        <td>{restaurant.AddressLine1 + " " + restaurant.AddressLine2 + " " + restaurant.AddressLine3}</td>
                        <td>
                          {restaurant.ContactNumber}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Total Number of Restaurants Resgistered</td>
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

}

export default ReportViewer