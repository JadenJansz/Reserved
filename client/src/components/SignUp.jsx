import axios from 'axios'
import React from 'react'
import { useState } from 'react'
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

    const inputs =[
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "E-mail",
            errorMessage: "Enter a valid email",
            required: true
        },
        {
            id: 2,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            errorMessage: 'Enter a valid First Name',
            required: true
        },
        {
            id: 3,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            errorMessage: "Enter a valid Last Name",
            required: true
        },
        {
            id: 4,
            name: "contactNumber",
            type: "text",
            placeholder: "Contact Number",
            errorMessage: "Enter a valid Contact Number",
            required: true
        },
        {
            id: 5,
            name: "city",
            type: "text",
            placeholder: "City",
            errorMessage: "Enter a valid City",
            required: true
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be more than 5 characters",
            required: true
        },
        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match",
            pattern: user.password,
            required: true
        }
    ]

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
    <div className=''>
        <form onSubmit={createUser}>
            {inputs.map((input) => (
                <FormInput className="w-96 bg-teal-100 h-12 rounded-lg border-0" key={input.id} {...input} value={user[input.name]} onChange={handleChange}/>
            ))}
        <button>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp