import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {

    const [sidebarActive, setSidebarActive] = useState(false)
    const [restaurantSidebar, setRestaurantSidebar] = useState(true)

    console.log(sidebarActive)

    return (
        <StateContext.Provider value={{ sidebarActive, setSidebarActive, restaurantSidebar, setRestaurantSidebar }} >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)