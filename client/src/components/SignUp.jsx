import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormInput from './FormInput'
import ResSignUp from "../assets/ResSignUp.jpg"

const SignUp = () => {

    const [user, setUser] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        city: '',
        password: '',
        confirmPassword: ''
    })

    const schema = yup.object().shape({
        email: yup.string().email().required("* email cannot be empty"),
        firstName: yup.string().required("* first name cannot be empty"),
        lastName: yup.string().required("* last name cannot be empty"),
        contactNumber: yup.string().length(10).required("* contact has only 10 characters"),
        city: yup.string().required("* city cannot be empty"),
        password: yup.string().required("* password cannot be empty"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null])
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })


    const handleChange = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value }) )
    }

    const createUser = async (e) => {
        e.preventDefault();

        console.log(user)
        try {
            const response = await axios.post("http://localhost:8800/create_customer", user)    
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <img src={ResSignUp} className="relative w-screen h-screen"/>
        <div className="absolute w-[700px] top-0 my-12 left-[420px] bg-white p-10 rounded-2xl">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Sign up</h1>
            <form onSubmit={handleSubmit(createUser)}>
                <input type="text" placeholder="Email" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("email")} />
                <p className="ml-2 text-sm text-rose-600">{errors.email?.message}</p>

                <div className='flex justify-center space-x-4'>
                    <div className='w-full'>
                            <input type="text" placeholder="First Name" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("firstName")} />
                            <p className="ml-2 text-sm text-rose-600">{errors.firstName?.message}</p>
                    </div>           
                    <div className='w-full'>
                            <input type="text" placeholder="Last Name" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("lastName")} />
                            <p className="ml-2 text-sm text-rose-600">{errors.lastName?.message}</p>
                    </div>
                </div>

                <div className='flex justify-center space-x-4'>
                    <div className='w-full'>
                            <input type="text" placeholder="Contact Number" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("contactNumber")} />
                            <p className="ml-2 text-sm text-rose-600">{errors.contactNumber?.message}</p>
                    </div>

                    <div className='w-full'>
                            <input type="text" placeholder="City" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("city")} />
                            <p className="ml-2 text-sm text-rose-600">{errors.city?.message}</p>
                    </div>
                </div>

                <input type="password" placeholder="Password" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("password")} />
                <p className="ml-2 text-sm text-rose-600">{errors.password?.message}</p>

                <input type="password" placeholder="Confirm Password" className="w-full h-12 bg-teal-100 rounded-xl px-4 py-4 text-base border-0" {...register("confirmPassword")} />
                <p className="ml-2 text-sm text-rose-600">{errors.confirmPassword && "*passwords do not match"}</p>

                <div className="flex justify-center mt-8"> 
                    <button className="w-72 h-12 bg-teal-500 text-white font-semibold hover:bg-teal-600 duration-300 rounded-xl px-10">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp