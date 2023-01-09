import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router'
import { useStateContext } from '../contextProviders/ContextProvider'
import { useEffect } from 'react'


const AdminLogin = () => {

    const navigate = useNavigate();
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(false)
        setRestaurantSidebar(false)
    }, [])

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const response = await axios.get("http://localhost:8800/admin_login", { params: data })
            console.log(response.data)

            if(response.data.length > 0){
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/admin_home', { state: response.data })
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>

            <button>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin