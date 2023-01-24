import React from 'react'
import { FaBars, FaTimes,FaFacebook, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import Popup from './Login'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const links = [
        {
            id: 1,
            links: 'home',
            href: '/'
        },
        {
            id: 2,
            links: 'business',
            href: '/admin_login'
        },
    ]

    return (
        <div className="fixed flex justify-between items-center bg-white font-base1 w-full h-10 sm:h-16 px-4 py-4  z-10"> 
            <div className="flex">
                {/* <img src={logo} alt="my logo" className="w-5 h-6 sm:ml-24 mt-1"/> */}
                <h1 className="text-lg font-bold sm:text-2xl font-logo lg:ml-24 text-black">Reserved</h1>
                <h2 className="ml-1 mt-2.5 text-sm font-logo text-black">.com</h2>
            </div>
            <div className="flex mr-24 items-center"> 
                <ul className="hidden md:flex">
                    {links.map(({ id, links, href}) =>(
                    <a href={href} key={id}><li className="px-4 cursor-pointer capitalize font-semibold text-base text-black hover:scale-110 hover:text-teal-600 duration-300">{links}</li></a>  ))}
                </ul> 
                <button onClick={togglePopup} size={28} className="ml-2 h-10 bg-teal-500 text-white font-semibold hover:bg-teal-700 duration-300 rounded-xl px-6"> Sign In </button>
                {isOpen && <Popup
                handleClose={togglePopup}
                />}
                <Link to='/sign_up'>
                <button size={28} className="ml-6 h-10 bg-teal-100 text-gray-800 font-semibold hover:bg-teal-300 duration-300 rounded-xl px-6"> Sign Up </button>
                </Link>
            </div> 

        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 font-color1 md:hidden mt-1">
            {nav ? <FaTimes size={25} /> : <FaBars size={25}/>}
        </div>
                {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark-back">
                {links.map(({ id, links, href}) =>(
                    <Link to={href} key={id} ><li className="px-4 cursor-pointer capitalize py-6 text-3xl font-light font-color1 hover:text-teal-400 hover:-rotate-6 hover:scale-110 duration-300">{links}</li></Link>  ))}
                </ul>
                )}
        </div>
        
    )
    
}

export default NavBar
