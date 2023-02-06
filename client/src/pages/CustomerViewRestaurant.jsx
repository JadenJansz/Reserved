import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'
import NavBar from '../components/NavBar'
import Taj from "../assets/taj.jpg"
import Hilton from "../assets/hilton.jpg"
import Iframe from 'react-iframe'
import CustomerViewReview from '../components/CustomerViewReview';
import { count, options } from '../data/selectData';

const CustomerViewRestaurant = () => {

    const [restaurant, setRestaurant] = useState({});
    const [reviews, setReviews] = useState([])
    const [tableDetails, setTableDetails] = useState({
        count: '1',
        date: "2023-02-06",
        time: '10.00',
    })

    const { state } = useLocation();
    const navigation = useNavigate(); 
    console.log(state);

    const getReview = async () => {
      try {
        const response = await axios.get("http://localhost:8800/view_review_customer", { params: { id: state.RestaurantID } } )
        setReviews(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    
    useEffect(() => {
        const table = JSON.parse(localStorage.getItem('table_details'))
        console.log(table)
        setTableDetails(table)
        setRestaurant(state)
        getReview()
    },[])

    const handleChange = (e) => {
      setTableDetails(prev => ({...prev, [e.target.name]: e.target.value }) )
    }

    // useEffect(() => {
    //   console.log(tableDetails)
    // }, [tableDetails])

    const checkAvailability = async () => {
      try {
        localStorage.setItem('table_details', JSON.stringify(tableDetails))
        const response = await axios.get("http://localhost:8800/check_availability", { params: { id: state.RestaurantID , table: tableDetails } } )
        console.log(response.data)
        
        if(response.data.length === 0){

          if(!sessionStorage.getItem('user')){
            alert("please sign in before you proceed")
          }
          else{
            navigation('/confirm_reservation',{ state: restaurant } )
          }
        }else{

        }

      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      <NavBar />
      {/* <h1>{restaurant.Name}</h1> */}
      <div className="w-full h-80">
        <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[0] : 'placeholder.jpg'}`} className="w-screen h-96"></img>
      </div>
      <div className="flex mt-28 mx-24 justify-between">
        <div className="w-[850px] h-max pr-6">
          <h1 className="text-4xl font-bold text-gray-800">{restaurant.Name}</h1>
          <h2 className="text-lg text-gray-500 mt-2">{restaurant.AddressLine1} {restaurant.AddressLine2} {restaurant.AddressLine3}</h2>
          <div className="flex justify-between my-8 pb-2 border-b-2 border-teal-500">
            <h1 className="text-base text-gray-800 font-semibold">115 Reviews</h1>
            <h1 className="text-base text-gray-800 font-semibold">Starting from $20</h1>
            <h1 className="text-base text-gray-800 font-semibold">Multiple dining options</h1>
          </div>
          <h1 className="text-sm text-gray-800 font-normal">
             Set on 4.5 hectares of lush gardens across from the Laccadive Sea, this upscale hotel is 2 km from 
            Gangaramaya Temple and 5 km from the Port of Colombo.
             Offering balconies with city or ocean views, the sophisticated rooms feature minibars, free Wi-Fi and flat-screen TVs, 
             plus tea and coffeemaking facilities. Suites add living rooms and/or dining rooms. 
             There is 24-hour room service. 
              Breakfast is free. There are upscale Chinese, Indian and Japanese restaurants, plus a hip coffee shop and 2 
            elegant lounges. Other amenities include an outdoor pool and tennis courts, plus a fitness centre and a 
            business centre.</h1>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">Photos</h1>
            <div className="flex justify-center space-x-4 mt-8 mb-10">
            <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[0] : 'placeholder.jpg'}`} className="w-96 h-60 rounded-lg"></img>
              <div>
                <div className="flex justify-center space-x-4 mb-4">
                  <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[1] : 'placeholder.jpg'}`} className="w-48 h-28 mr-4 rounded-md"></img>
                  <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[2] : 'placeholder.jpg'}`} className="w-48 h-28 rounded-md"></img>
                </div>
                <div className="flex justify-center space-x-4">
                  <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[3] : 'placeholder.jpg'}`} className="w-48 h-28 mr-4 rounded-md"></img>
                  <img src={`http://localhost:8800/${restaurant.Image != undefined ? JSON.parse(restaurant.Image)[4] : 'placeholder.jpg'}`} className="w-48 h-28 rounded-md"></img>
                </div>
            </div>
              </div>
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500 mb-8">Menu</h1>
              <embed src={`http://localhost:8800/${restaurant.Menu != undefined ? JSON.parse(restaurant.Menu)[0] : 'placeholder.jpg'}`} type="application/pdf" width="100%" height="650px"  />
              {/* <div style={{ backgroundColor: 'black' }}>

              <Document file="https://cors-anywhere.herokuapp.com/https://www.africau.edu/images/default/sample.pdf" className='react-pdf__Page__canvas' >
              <Page pageNumber={2} />
              </Document>
              </div> */}
            <h1 className="text-xl text-gray-800 font-semibold mt-14 pb-4 border-b-2 border-teal-500">What people are saying</h1>

            {
              reviews.map((review) => (
                <CustomerViewReview key={review.ReviewID} review={review} />
              ))
            }
        </div>
        <div>
          <div className="block w-[400px] border-2 border-teal-500 rounded-lg p-6 mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Make a reservation</h1>
            <input type="date" id="date" name="date" defaultValue="2023-02-06" onChange={handleChange} className="w-full h-12 mb-4 bg-teal-100 rounded-lg px-4 text-sm border-0" /><br />
            <select name="time" id="time" onChange={handleChange} className="w-full h-12 mb-4 bg-teal-100 text-sm px-4 rounded-lg">
                    <option disabled={true}>Select your time</option>
                    {options.map((option) => (
                      <option key={option.id} selected={tableDetails.time === option.value} value={option.value}>{option.label}</option>
                    ))}
            </select>
            <select name="count" id="count" onChange={handleChange} className="w-full h-12 mb-8 bg-teal-100 text-sm px-4 rounded-lg">
                    <option disabled={true} className="">Person count</option>
                    {count.map((number) => (
                      <option key={number.id} selected={tableDetails.count === number.value} value={number.value}>{number.label}</option>
                    ))}
            </select>
            <button className="w-full h-12 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-lg px-6" onClick={checkAvailability}> Check Availability </button>
          </div>
          <div className="block w-[400px] border-2 border-teal-500 rounded-lg py-6">
            <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">Location</h1>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15842.926893021824!2d79.8467957!3d6.9226396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a84fafa80297e3f!2sTaj%20Samudra%2C%20Colombo!5e0!3m2!1sen!2slk!4v1673443162058!5m2!1sen!2slk" 
            className="w-[396px] h-72"></Iframe>
            <h1 className="text-base font-semibold text-gray-700 mt-4 px-10 text-center">{restaurant.AddressLine1} {restaurant.AddressLine2} {restaurant.AddressLine3}</h1>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default CustomerViewRestaurant