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

{/* <Iframe url="https://www.google.com/maps/place/LiveRoom+(Pvt)+Ltd/@6.8730458,79.9017449,15z/data=!4m5!3m4!1s0x0:0xb3bb47840c126875!8m2!3d6.8730462!4d79.9017447"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
    </div>
  );
};

export default CustomerHome;
