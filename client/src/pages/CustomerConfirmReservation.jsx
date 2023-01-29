import React from 'react'
import NavBar from '../components/NavBar'
import Taj from "../assets/taj.jpg"
import Card from "../assets/visa&master.png"
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Login from '../components/Login'
import { useState } from 'react'
import { Elements, CardElement, ElementsConsumer, PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'

const stripePromise = loadStripe("pk_test_51KZK2DFNOU5H46UrKf02FBa0eXC89r5zWl9rBcrbKHlKq5Jbr7Vkp9koQQLmBdVj3I8LS5feDQfXvy3V3ZeZThKY004LY3W8jd")

const CustomerConfirmReservation = () => {

  const [table, setTable] = useState({});
  const [details, setDetails] = useState({});

  const { state } = useLocation();

  const navigation = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem("user")){
      setTable(JSON.parse(localStorage.getItem('table_details')));
      setDetails(JSON.parse(sessionStorage.getItem('user')));
    }
  }, [])

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod} = await stripe.createPaymentMethod({ type:'card', card: cardElement })

      if(error){
        console.log(error);
      }
      else{
          try {
            const response = await axios.post('http://localhost:8800/add_reservation', { data: details, table: table, restaurant: state.RestaurantID });
            console.log(response)

            if(response.data.affectedRows > 0){
              navigation('/complete_reservation')
            }
            else{
              alert(response)
            }
          } catch (err) {
            console.log(err)
          }
      }
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-evenly mx-24 mt-20">
        <div className="w-[900px]">
          <h1 className="text-xl font-semibold text-black mb-6">
            First step completed ! Please fill the below details.
          </h1>
          <div className="flex justify-start w-[700px]">
            <img src={Taj} className="w-56 h-28 rounded-lg"></img>
            <div className="block ml-12">
              <h1 className="text-2xl font-bold text-gray-700">
                {state.Name}
              </h1>
              <h3 className="text-lg font-normal text-gray-400 mb-6">
              {state.AddressLine1} {state.AddressLine2} {state.AddressLine3} 
              </h3>
              <div className="flex justify-between">
                <h1 className="text-base text-gray-500 font-semibold">{table.date}</h1>
                <h1 className="text-base text-gray-500 font-semibold">{table.time}</h1><h1 className="text-base text-gray-500 font-semibold">7:00pm</h1>
                <h1 className="text-base text-gray-500 font-semibold">{table.count} people</h1>
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
            <div className="flex justify-between space-x-4">
              <div>
                <Elements stripe={stripePromise}>
                  <ElementsConsumer>
                  {({ elements, stripe }) => (
                          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <input type="text" placeholder="First Name" defaultValue={details.FirstName} className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12 border-0"></input>
                            <input type="text" placeholder="last Name" defaultValue={details.LastName} className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12 ml-6 border-0"></input>
                            <div>
                              <input type="text" placeholder="Tel. No" defaultValue={details.ContactNumber} className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12 border-0"></input>
                              <input type="text" placeholder="Email" defaultValue={details.Email} className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12 ml-6 border-0"></input>
                              <input type="text" placeholder="Name on card" className="rounded-xl px-4 py-4 bg-teal-100 w-96 h-12 border-0"></input>
                              <img src={Card} className="w-36 h-14 mt-2"></img>
                            </div>
                              <CardElement options={{width: '100px'}}/>
                              <button className="w-96 h-12 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-lg px-6 ml-52 mt-10"> Confirm reservation </button>
                          </form>
                      )}
                  </ElementsConsumer>
                </Elements>

              </div>
            </div>
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