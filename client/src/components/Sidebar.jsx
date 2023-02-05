import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../contextProviders/ContextProvider'
import { WebsiteAdminLinks, RestaurantAdminLinks } from '../data/sidebarData'
import { GoSignOut } from 'react-icons/go'
import Popup from '../components/Logout'
import { useState } from "react";

const Sidebar = () => {
  const { restaurantSidebar } = useStateContext();

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-lg font-semibold m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-base text-gray-700 font-medium m-2';

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
      setIsOpen(!isOpen);
  } 

  return (
    <div className='fixed w-72 pl-4 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pr-6 border-r-2 border-teal-500'>
        <>
            <div className='flex justify-between items-center'>
                <Link to='/' onClick={() => {}} className='items-center gap-3 ml-3 mt-6 flex tracking-tight'>
                  <div className="flex text-black font-logo">
                    <h1 className="font-bold text-2xl pl-8">Reserved</h1>
                    <h2 className="ml-1 mt-2.5 text-sm">.com</h2>
                  </div>
                </Link>
            </div>

            <div className="mt-10 ">
                <p className="text-gray-700 dark:text-gray-700 m-3 mt-16 text-2xl font-medium">
                  Main Menu
                </p> 
                { restaurantSidebar ? 
            (RestaurantAdminLinks.map((item) => (
              <div key={item.title}>
                {item.links.map((link) => (
                  <NavLink
                  to={`/${link.link}`}
                  key={link.name}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? '#009688' : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <h2 className="capitalize">{link.name}</h2>
                  </NavLink>
                ))}
              </div>
            )))
            :
            (
              WebsiteAdminLinks.map((item) => (
                <div key={item.title}>
                  {item.links.map((link) => (
                    <NavLink
                    to={`/${link.link}`}
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? '#009688' : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <h2 className="capitalize">{link.name}</h2>
                    </NavLink>
                  ))}
                </div>
              ))
            )
          }
          <div className='flex ml-8 relative top-52'>
            <GoSignOut className='text-gray-700 mt-1'/>
            <NavLink onClick={togglePopup} className="text-base text-gray-700 font-medium ml-4">Logout</NavLink>
          </div>
          {isOpen && <Popup
          content={<>
            <div className="">
              <h1 className="text-3xl font-bold mb-8 text-center">Log out</h1>
              <h1 className="text-base text-gray-700 font-semibold mt-8 text-center mx-4">Are you sure you want to log out !</h1>
              <div className="flex justify-center space-x-6 mt-10 mb-4">
                <button className="w-48 h-12 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Yes, Logout</button>
                <button className="w-48 h-12 text-sm bg-teal-100 text-gray-700 font-medium hover:bg-teal-300 duration-300 rounded-md px-2" onClick={togglePopup}>Cancel</button>
            </div>                
            </div>
          </>}
            handleClose={togglePopup}
          />}
          </div>
        </>
    </div>
  )
}

export default Sidebar