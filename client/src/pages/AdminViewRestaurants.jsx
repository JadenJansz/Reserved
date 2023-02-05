import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useStateContext } from '../contextProviders/ContextProvider';
import AdminViewRestaurant from './AdminViewRestaurant';
import PopularRestaurants from '../components/PopularRestaurants';
import AdminRestaurantCard from '../components/AdminRestaurantCard';
import AdminNavBar from '../components/AdminNavBar'
import Hilton from "../assets/hilton.jpg"
import Cinnamon from "../assets/cinnamon.jpg"
import Taj from "../assets/taj.jpg"
import Shangrila from "../assets/shangrila.jpg"

const AdminViewRestaurants = () => {

    const [restaurants, setRestaurants] = useState([])
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
    const [nameSearch, setNameSearch] = useState('');
    
    const fetchRestaurants = async () => {
        try {
            const response = await axios.get('http://localhost:8800/admin_view_reataurants');
            console.log(response.data);
            setRestaurants(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const searchRestaurant = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8800/search_restaurants_name', {params: {name: nameSearch}} )

            if(response.data.length > 0){
                setRestaurants(response.data)
                console.log(response.data)
            }else{
                alert("Your search does not match any restaurants")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleNameChange = (e) => {
        setNameSearch(e.target.value)
        console.log(nameSearch)
    }

    useEffect(() => {
        fetchRestaurants();
        setSidebarActive(true);
        setRestaurantSidebar(false);
        console.log('lll')
    }, [])

    const tiles = [
        {
            id: 1,
            src: Hilton,
            title: 'Hilton Grand',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 2,
            src: Cinnamon,
            title: 'Cinnamon Grand',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 3,
            src: Taj,
            title: 'Taj Samudra',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
    ]
  
    // <AdminViewRestaurant key={restaurant.RestaurantID} restaurant={restaurant} />
    return (
    <div>
        <AdminNavBar/>
        <div className="block mt-36 px-16">
            <h1 className='text-2xl font-medium text-gray-700 mb-4 mt-4'>Search to view restaurant</h1>
            <input type="text" placeholder="Type restaurant name here" className="rounded-lg px-4 py-4 bg-teal-100 w-96 h-10 border-0" onChange={handleNameChange}></input>
            <button className="w-28 h-10 text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2 ml-4 mt-2"  onClick={searchRestaurant}>Search</button>
        </div>
        <div className="relative flex items-center gap-8 pb-10 px-16 cursor-pointer">
        </div>
        {
            restaurants.map((restaurant) => (
                <AdminRestaurantCard key={restaurant.RestaurantID} restaurant={restaurant} />
            ))
        }
    </div>
  )
}

export default AdminViewRestaurants