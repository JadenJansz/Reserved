import React from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Popular from "../components/Popular";
import Join from "../components/ResJoin";
import Iframe from 'react-iframe'


const CustomerHome = () => {
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
