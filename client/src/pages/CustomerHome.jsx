import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Popular from "../components/Popular";
import Join from "../components/ResJoin";
import Iframe from 'react-iframe'
import { useStateContext } from "../contextProviders/ContextProvider";


const CustomerHome = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(false)
        setRestaurantSidebar(false)
    }, [])


  return (
    <div>
      <NavBar />
      <Search />
      <Popular />
      <Join />
    </div>
  );
};

export default CustomerHome;
