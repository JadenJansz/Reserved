import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RestaurantViewReview from '../components/RestaurantViewReview'
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'

const ViewReview = () => {

    const [reviews, setReviews] = useState([]) 

    const { sidebarActive, setSidebarActive } = useStateContext();

    const getReviews = async () => {
        try {
            const response = await axios.get("http://localhost:8800/review")

            setReviews(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setSidebarActive(true);
        getReviews()
    }, [])

  return (
    <div>
        <AdminNavBar />
        <div className="flex mt-28 px-16">
            <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>Reviews given by customers</h1>
        </div>
        <div className='border-2 border-teal-500 rounded-2xl mx-16 w-[1100px] h-max mt-2'>
            {
                reviews.map((review) => <RestaurantViewReview key={review.ReviewID} review={review} />)
            } 
        </div>
    </div>
  )
}

export default ViewReview