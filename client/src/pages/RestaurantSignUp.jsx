import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router'
import { useStateContext } from '../contextProviders/ContextProvider'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResSignUp from "../assets/ResSignUp.jpg"

const RestaurantSignUp = () => {

    const navigate = useNavigate();
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar, setSession } = useStateContext();

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        console.log(data)
    }

  return (
    <div>
        <img src={ResSignUp} className="relative w-screen h-screen"></img>
        <div className="absolute flex top-20 left-[680px]">
            <h1 className="font-bold text-3xl font-logo text-white">Reserved</h1>
            <h2 className="ml-1 mt-2.5 text-base font-logo text-white">.com</h2>
        </div>
        <div className="absolute w-[550px] top-28 left-[500px] bg-white p-6 rounded-2xl mt-6">
            <h1 className="text-3xl font-bold mb-8 text-center">Join with us</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="Restaurant Name" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("email")} />
                <p className="ml-2 text-sm text-rose-600">{errors.email?.message}</p>
                <input type="text" placeholder="Password" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("password")} />
                <p className="ml-2 text-sm text-rose-600">{errors.password?.message}</p>
                <input type="text" placeholder="contact No." className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("email")} />
                <p className="ml-2 text-sm text-rose-600">{errors.email?.message}</p>
                <input type="text" placeholder="Located City" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("password")} />
                <p className="ml-2 text-sm text-rose-600">{errors.password?.message}</p>
                <div className="flex justify-center mt-10"> 
                    <button className="w-48 h-12 bg-teal-500 text-white font-semibold hover:bg-teal-600 duration-300 rounded-xl px-10">Sign in</button>
                </div> 
            </form> 
            <h1 className="text-xs font-normal text-teal-600 mt-6 text-center">We will reach via Email or Contact No. after reviewing your details.</h1>
        </div>
        <div className="absolute bottom-10 left-[630px]">
            <h2 className="text-sm font-logo text-white opacity-50">@ 2022 Reserved.com All rights reserved</h2>
        </div>
    </div>
  )
}

export default RestaurantSignUp