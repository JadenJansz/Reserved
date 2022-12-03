import React from 'react'
import { FaBars, FaTimes,FaFacebook, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { VscAccount } from 'react-icons/vsc'
import Popup from './Login'
import { FcGoogle } from 'react-icons/fc'

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
            href: '#home'
        },
        {
            id: 2,
            links: 'about',
            href: '#about'
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
                    <a href={href}><li key={id} className="px-4 cursor-pointer capitalize font-semibold text-base text-black hover:scale-110 hover:text-teal-600 duration-300">{links}</li></a>  ))}
                </ul> 
                <VscAccount onClick={togglePopup} size={28} className="ml-2 hover:scale-105 hover:text-teal-600 cursor-pointer duration-300"/>
                {isOpen && <Popup
                    content={<>
                        <div className="">
                            <h1 className="text-3xl font-bold mb-8 text-center">Sign in</h1>
                            <input type="text" placeholder="Username" className="w-full h-12 bg-gray-100 rounded-xl px-4 py-4 text-base shadow-md shadow-gray-300 hover:bg-white duration-300 mb-8"></input>
                            <input type="password" placeholder="Password" className="w-full h-12 bg-gray-100 rounded-xl px-4 py-4 text-base shadow-md shadow-gray-300 hover:bg-white duration-300 mb-2"></input>
                            <div className="flex justify-end text-xs font-semibold text-teal-600 cursor-pointer"><a>Forget password ?</a></div>
                            <div className="flex justify-center mt-8"> 
                                <button className="w-48 bg-teal-600 text-white font-semibold hover:shadow-md hover:shadow-teal-500 hover:scale-105 duration-300 rounded-xl px-10 py-4">Sign in</button>
                            </div>
                            <h1 className="text-sm font-semibold mt-8 text-center">- Or Sign in with -</h1>
                            <div className="flex justify-center gap-10 cursor-pointer mt-4">
                                <FcGoogle size={50} className="rounded-full shadow-md p-3 shadow-gray-400 hover:scale-105 duration-300"/>
                                <FaFacebook size={50} className="rounded-full shadow-md p-3 shadow-gray-400 hover:scale-105 duration-300 text-blue-700"/>
                                <FaTwitter size={50} className="rounded-full shadow-md p-3 shadow-gray-400 hover:scale-105 duration-300 text-sky-500"/>
                            </div>
                            <h1 className="text-xs font-semibold mt-10 text-center">Don't have an account ? <a className="text-sm font-semibold text-teal-600 cursor-pointer">Sign up</a></h1>
                        </div>
                    </>}
                handleClose={togglePopup}
                />}
            </div> 

        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 font-color1 md:hidden mt-1">
            {nav ? <FaTimes size={25} /> : <FaBars size={25}/>}
        </div>
                {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark-back">
                {links.map(({ id, links, href}) =>(
                    <a onClick={() => setNav(!nav)} href={href}><li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl font-light font-color1 hover:text-teal-400 hover:-rotate-6 hover:scale-110 duration-300">{links}</li></a>  ))}
                </ul>
                )}
        </div>
        
    )
    
}

export default NavBar
