import axios from 'axios'
import { Input } from 'postcss'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    // const date = `${new Date().getFullYear()+1}-${new Date().getMonth()+1}-${new Date().getDate()}`.toString()

    const [available, setAvailable] = useState({
        date: "",
        time: '10.00',
        count: '1'
    })

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        let day = new Date().getDate()
        let month = new Date().getMonth()+1
        let year = new Date().getFullYear()

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        const date = year + '-' + month + '-' + day
        setAvailable({ ...available, date: date })
        setCurrentDate(date)
    }, [])


    const [nameSearch, setNameSearch] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAvailable(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(available)

        try {
            localStorage.setItem('table_details', JSON.stringify(available))
            const response = await axios.get('http://localhost:8800/search_restaurants_time', {params: available} )
            console.log(response)

            const result = (response.data).flatMap(item => item.RestaurantID)
            
            navigate('/search_restaurants', { state: result })
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleNameChange = (e) => {
        setNameSearch(e.target.value)
        console.log(nameSearch)
    }

    const searchRestaurant = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:8800/search_restaurants_name', {params: {name: nameSearch}} )

            if(response.data.length > 0){
                const result = (response.data).flatMap(item => item.RestaurantID)
                
                navigate('/search_restaurants', { state: result })
            }else{
                alert("Your search does not match any restaurants")
            }

        } catch (error) {
            console.log(error)
        }
    }
 
  return (
    <div className="bg-gradient-to-r from-teal-500 via-teal-400 to-teal-400 w-screen h-64 sm:h-80 px-4 py-14"> 
            <div className="">
                <h1 className="text-5xl font-bold text-center text-white mt-20 mx-auto">Find Your Table For Any Occasion</h1>
            </div>
            <div className="flex justify-center mt-2"> 
                <input type="date" id="date" onChange={handleChange} defaultValue={currentDate} min={currentDate} name="date" className="w-auto h-14 bg-teal-100 rounded-l-xl px-4 py-4 text-lg hover:shadow-md hover:shadow-teal-600 hover:bg-white duration-300 mr-1 border-0"></input>
                <select name="time" id="time" onChange={handleChange} className="w-auto h-14 bg-teal-100 text-base px-4 py-4 hover:shadow-md hover:shadow-teal-600 hover:bg-white duration-300 mr-1 mt-2.5">
                    <option disabled={true}>Select your time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                </select>
                <select name="count" id="count" onChange={handleChange} className="w-auto h-14 bg-teal-100 hover:bg-white text-base px-4 py-4 rounded-r-xl hover:shadow-md hover:shadow-teal-600 duration-300 mt-2.5">
                    <option disabled={true} className="">Person count</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="4">4 people</option>
                    <option value="6">6 people</option>
                    <option value="8">8 people</option>
                    <option value="9">9 people</option>
                    <option value="10">10 people</option>
                </select>
                <input type="text" placeholder="Search Restaurants" className="ml-10 rounded-l-xl px-4 py-4 bg-teal-100 duration-300 border-0"  onChange={handleNameChange}></input>
                <AiOutlineSearch onClick={searchRestaurant} className="w-8 h-14 bg-teal-100 mt-2.5 pr-2 rounded-r-xl cursor-pointer hover:w-10 duration-300"/>
                <button className="ml-10 h-14 bg-teal-600 text-white font-semibold hover:bg-teal-700 duration-300 rounded-xl px-10 py-4 mt-2.5" onClick={handleClick} >Get started</button>
            </div> 
        </div>
        
  )
}

export default Search