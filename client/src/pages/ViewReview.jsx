import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import RestaurantViewReview from '../components/RestaurantViewReview'
import { useStateContext } from '../contextProviders/ContextProvider'

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
        {
            reviews.map((review) => <RestaurantViewReview key={review.ReviewID} review={review} />)
        }
        <div>
            <h2>Helllo</h2>
        </div>
    </div>
  )
}

export default ViewReview