import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../contextProviders/ContextProvider'
import { WebsiteAdminLinks, RestaurantAdminLinks } from '../data/sidebarData'

const Sidebar = () => {
  const { restaurantSidebar } = useStateContext();

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-lg font-semibold m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-base text-gray-700 font-medium m-2';

  return (
    <div className='fixed w-64 ml-6 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 pr-6 border-r-2 border-teal-500'>
        <>
            <div className='flex justify-between items-center'>
                <Link to='/' onClick={() => {}} className='items-center gap-3 ml-3 mt-6 flex tracking-tight'>
                  <div className="flex text-black font-logo">
                    <h1 className="font-bold text-2xl">Reserved</h1>
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
                    <img />
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
                      <h2 className="capitalize">{link.name}</h2>
                    </NavLink>
                  ))}
                </div>
              ))
            )
          }
          <NavLink className="relative top-64 text-base text-gray-700 font-medium ml-6">Logout</NavLink>
          </div>
        </>
    </div>
  )
}

export default Sidebar