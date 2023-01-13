import React,{ useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useStateContext } from '../contextProviders/ContextProvider'

const AdminAddRestaurant = () => {

  const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(false)
    }, [])

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      location: yup.string().required()
  })

  const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    console.log(data)

    try {
        const response = await axios.post("http://localhost:8800/admin_create_restaurant", data )
        console.log(response.data)

        
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="text" placeholder="Location" {...register("location")} />
        <p>{errors.location?.message}</p>

        <button>Add Restaurant</button>
      </form>
    </div>
  )
}

export default AdminAddRestaurant