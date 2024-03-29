import React,{ useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { useNavigate, useNavigation } from 'react-router';
import { useState } from 'react';

const AdminAddRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();
  const form = useRef();
  const navigation = useNavigate()

  const [password, setPassword] = useState(Math.floor(Math.random() * (10000000 - 1000000) + 1000000))

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
    }, [])

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      location: yup.string().required(),
      password: yup.string().required(),
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    console.log(data)

    try {
        const response = await axios.post("http://localhost:8800/admin_create_restaurant", data )
        console.log(response)
        emailjs.sendForm('service_39djbhb', 'template_c3vp95s', form.current, 'u11NF1NuinPtULcik')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });

        alert("Restaurant Added Successfully");
        window.location.reload();

    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <AdminNavBar />
      <div className="mt-40 px-16">
        <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>Enter details</h1>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className='text-base font-medium text-gray-400 mt-4'>E-mail</h1>
          <input type="text" name='email' placeholder="" className="w-[500px] h-12 -mt-0 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("email")} />
          <p className="ml-2 text-sm text-rose-600">{errors.email?.message}</p>
          <h1 className='text-base font-medium text-gray-400 mt-4'>Location</h1>
          <input type="text" placeholder="" className="w-[500px] h-12 -mt-0 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("location")} />
          <p className="ml-2 text-sm text-rose-600">{errors.location?.message}</p>
          <input type="text" name='password' value={password} className="opacity-0" {...register("password")} />
          <div className="flex justify-center space-x-6 mt-10">
            <button className="w-44 h-10 text-sm bg-rose-500 text-white font-medium hover:bg-rose-700 duration-300 rounded-md px-2">Clear details</button>
            <button type='submit' className="w-44 h-10 text-sm bg-teal-600 text-white font-medium hover:bg-teal-800 duration-300 rounded-md px-2">Add restaurant</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminAddRestaurant