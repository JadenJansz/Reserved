import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Popular from './components/Popular'
import Search from './components/Search'
import Footer from './components/Footer'
import AdminHome from './pages/AdminHome'
import AdminViewRestaurants from './pages/AdminViewRestaurants'
import CustomerHome from './pages/CustomerHome'
import CustomerViewRestaurant from './pages/CustomerViewRestaurant'
import CustomerSearchRestaurants from './pages/CustomerSearchRestaurants'
import SignUp from './components/SignUp'
import AddRestaurant from './pages/AddRestaurant'
import AdminLogin from './pages/AdminLogin'
import ViewReview from './pages/ViewReview'
import Sidebar from './components/Sidebar'
import { useStateContext } from './contextProviders/ContextProvider'
import AdminAddRestaurant from './pages/AdminAddRestaurant'
import AdminViewRestaurant from './pages/AdminViewRestaurant'
import CustomerConfirmReservation from './pages/CustomerConfirmReservation'
import CustomerCompleteReservation from './pages/CustomerCompleteReservation'
import RestaurantHome from './pages/RestaurantHome'
import NewReservations from './pages/NewReservations'
import OldReservations from './pages/OldReservations'
import { Axios } from 'axios'


const App = () => {

  const { sidebarActive } = useStateContext();

  // Axios.defaults.withCredentials = true;

  return (
    <div className='flex'>
      <BrowserRouter>
      {/* <NavBar /> */}
      {sidebarActive && (<div className="w-72 sidebar dark:bg-secondary-dark-bg bg-white ">
                            <Sidebar />
                        </div>) 
      }
        <Routes>
          {/* Customer Pages */}
          <Route path='/' element={<CustomerHome />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/search_restaurants' element={ <CustomerSearchRestaurants /> } />
          <Route path='/view_restaurant' element={<CustomerViewRestaurant />} />
          <Route path='/confirm_reservation' element={<CustomerConfirmReservation />} />
          <Route path='/complete_reservation' element={<CustomerCompleteReservation />} />

          {/* Restaurant Pages */}
          <Route path='/restaurant_home' element={<RestaurantHome />} />
          <Route path='/add_restaurant' element={<AddRestaurant />} />
          <Route path='/new_reservations' element={<NewReservations />} />
          <Route path='/old_reservations' element={<OldReservations />} />
          <Route path='/review' element={ <ViewReview /> } />

          {/* Admin Pages */}
          <Route path='/admin_login' element={<AdminLogin />} />
          <Route path='/admin_home' element={<AdminHome />} />
          <Route path='/admin_add_restaurant' element={ <AdminAddRestaurant /> } />
          <Route path='/admin_view_restaurants' element={<AdminViewRestaurants />} />
          <Route path='/admin_view_restaurant' element={<AdminViewRestaurant />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App