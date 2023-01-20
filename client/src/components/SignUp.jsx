import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormInput from './FormInput'

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
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        contactNumber: yup.string().length(10).required(),
        city: yup.string().required(),
        password: yup.string().required(),
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
        <form onSubmit={handleSubmit(createUser)}>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input type="text" placeholder="First Name" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <input type="text" placeholder="Last Name" {...register("lastName")} />
            <p>{errors.lastName?.message}</p>

            <input type="text" placeholder="Contact Number" {...register("contactNumber")} />
            <p>{errors.contactNumber?.message}</p>

            <input type="text" placeholder="City" {...register("city")} />
            <p>{errors.city?.message}</p>

            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
        <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp