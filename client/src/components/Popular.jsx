import React from 'react'
import Hilton from "../assets/hilton.jpg"
import Cinnamon from "../assets/cinnamon.jpg"
import Taj from "../assets/taj.jpg"
import Shangrila from "../assets/shangrila.jpg"
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Popular = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 1140
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 1140
    }

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
        {
            id: 4,
            src: Shangrila,
            title: 'Shangri La',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 5,
            src: Shangrila,
            title: 'Shangri La',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 6,
            src: Hilton,
            title: 'Hilton Grand',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 7,
            src: Cinnamon,
            title: 'Cinnamon Grand',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 8,
            src: Taj,
            title: 'Taj Samudra',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 9,
            src: Shangrila,
            title: 'Shangri La',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
        {
            id: 10,
            src: Shangrila,
            title: 'Shangri La',
            details: 'International - Colombo',
            style: 'border-gray-200'
        },
    ]

  return (
    <div className="bg-white w-full h-max sm:h-64 px-4 py-10">
        <div className="border-y-2 border-teal-100 pt-10 pb-4 mx-24">
            <h2 className="text-2xl font-semibold text-black">
                Popular Restaurants Near You
            </h2>
        </div>
        <div className="relative flex items-center gap-8 sm:gap-8 px-12 pb-10 sm:px-24 mt-4 cursor-pointer">
            <MdChevronLeft onClick={slideLeft} className="w-14 h-12 rounded-full shadow-sm shadow-teal-600 hover:shadow-md hover:shadow-teal-600 hover:scale-105 duration-300"/>
            <div id="slider" className="w-full h-max py-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {
                tiles.map(({id, src, title, style, details}) => (
                    <div key={id} className={`inline-block mr-4 hover:scale-105 duration-300 rounded-xl border-2 ${style}`}>
                        <img className="w-[266px] rounded-t-xl h-44 ease-in-out duration-300" src={src} alt="" />
                        <div className="px-2">
                            <h2  className="mt-4 text-sm sm:text-lg font-semibold text-gray-700">{title}</h2>
                            <p className="text-sm pb-4 text-gray-500">{details}</p>
                            <button className="w-full justify-center text-base text-black font-semibold border-2 border-gray-200 hover:bg-teal-600 hover:text-white duration-500 
                            px-4 py-2 mb-2.5 rounded-lg">Check out</button>
                        </div>
                    </div>
                ) )
            }
            </div>
            <MdChevronRight onClick={slideRight} className="w-14 h-12 rounded-full shadow-sm shadow-teal-600 hover:shadow-md hover:shadow-teal-600 hover:scale-105 duration-300"/>
        </div>
    </div>
  )
}

export default Popular