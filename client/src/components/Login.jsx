import React from 'react'
import { FaBars, FaTimes,FaFacebook, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios';

const Login = ({ handleClose }) => {

      const [isOpen, setIsOpen] = useState(false);

      const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
      })

      const { register, handleSubmit, formState: {errors} } = useForm({
          resolver: yupResolver(schema)
      })

      const onSubmit = async (data) => {
          try {
              
              const response = await axios.post("http://localhost:8800/customer_login", data)
              console.log(response.data[0])
              if(response.data !== "Invalid Credentials"){
                  setIsOpen(false)
                  handleClose();
                  sessionStorage.setItem('user', JSON.stringify(response.data[0]));
              }else{
                  alert(response.data)
              }

          } catch (error) {
              console.log(error)
          }
      }

  return (
    <div className="fixed bg-black bg-opacity-30 w-full h-screen top-0 left-0 z-10">
      <div className="relative w-1/4 m-auto h-auto mt-28 bg-white rounded-2xl p-5 overflow-auto">
        <FaTimes size={20} className="cursor-pointer fixed right-[580px] top-[122px]" onClick={handleClose} />
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold mb-8 text-center">Sign in</h1>
            <input type="text" placeholder="Username" {...register('email')} className="w-full h-12 bg-gray-100 rounded-xl px-4 py-4 text-base shadow-md shadow-gray-300 hover:bg-white duration-300 mb-8"></input>
            <p className="ml-2 text-sm text-rose-600">{errors.email?.message}</p>
            <input type="password" placeholder="Password" {...register('password')} className="w-full h-12 bg-gray-100 rounded-xl px-4 py-4 text-base shadow-md shadow-gray-300 hover:bg-white duration-300 mb-2"></input>
            <p className="ml-2 text-sm text-rose-600">{errors.password?.message}</p>
            <div className="flex justify-end text-xs font-semibold text-teal-600 cursor-pointer"><a>Forgot password ?</a></div>
            <div className="flex justify-center mt-8"> 
                <button className="w-48 bg-teal-600 text-white font-semibold hover:shadow-md hover:shadow-teal-500 hover:scale-105 duration-300 rounded-xl px-10 py-4">Sign in</button>
            </div>
          </form>
              <h1 className="text-xs font-semibold mt-10 text-center">Don't have an account ? <Link className="text-sm font-semibold text-teal-600 cursor-pointer" to='sign_up'>Sign up</Link></h1>
        </div>
      </div>
    </div>
  )
}

export default Login