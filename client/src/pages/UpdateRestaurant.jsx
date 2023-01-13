import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ImageUploader from '../components/ImageUploader'
import { useStateContext } from '../contextProviders/ContextProvider'

const UpdateRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState({})
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    
    
    const retrieveRestaurant = async () => {
        const id = localStorage.getItem('user')
        
        try {
            const response = await axios.get("http://localhost:8800/owner_view_restaurant", { params : {id: id} })
            console.log(response)
            
            setRestaurantData(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        setSidebarActive(true)
        setRestaurantSidebar(true)
        retrieveRestaurant()
    }, [])

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        address1: yup.string().required(),
        address2: yup.string().required(),
        address3: yup.string(),
        contactNumber: yup.string().length(10).required(),
        cuisine: yup.string().required(),
        menu: yup.mixed().required()
                .test("required", "You need to provide a file", (file) => {
                return file && file.length
        }),
        open: yup.string().required(),
        close: yup.string().required(),
        parking: yup.string().required(),
        payment: yup.string().required(),
        website: yup.string().url(),
        facilities: yup.string().required(),
        location: yup.string(),
        image: yup.mixed().required()
                .test("required", "You need to provide a file", (file) => {
        return file && file.length
}),
     })
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {

        console.log(restaurantData)
    }, [setRestaurantData])

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const response = await axios.post("http://localhost:8800/add_restaurant_details", data)    
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className="flex-col">
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Name" defaultValue={restaurantData.Name} {...register("name")} />
            <p>{errors.name?.message}</p>

            <input type="text" placeholder="Address Line 1" defaultValue={restaurantData.AddressLine1} {...register("address1")} />
            <p>{errors.address1?.message}</p>

            <input type="text" placeholder="Address Line 2" defaultValue={restaurantData.AddressLine2} {...register("address2")} />
            <p>{errors.address2?.message}</p>

            <input type="text" placeholder="Address Line 3" defaultValue={restaurantData.AddressLine3} {...register("address3")} />
            <p>{errors.address3?.message}</p>

            <input type="text" placeholder="Contact Number" defaultValue={restaurantData.ContactNumber} {...register("contactNumber")} />
            <p>{errors.contactNumber?.message}</p>
            
            <input type="text" placeholder="Cuisine" defaultValue={restaurantData.Cuisine} {...register("cuisine")} />
            <p>{errors.cuisine?.message}</p>

            <input type="file" multiple accept="image/*" placeholder="Menu" {...register("menu")} />
            <p>{errors.menu?.message}</p>

            <input type="time" defaultValue={restaurantData.OpenTime} {...register("open")} />
            <p>{errors.open?.message}</p>

            <input type="time" defaultValue={restaurantData.CloseTime} {...register("close")} />
            <p>{errors.close?.message}</p>

            <input type="text" placeholder="Parking" defaultValue={restaurantData.ParkingDetails} {...register("parking")} />
            <p>{errors.parking?.message}</p>

            <input type="text" placeholder="Payment Options" defaultValue={restaurantData.PaymentOption} {...register("payment")} />
            <p>{errors.payment?.message}</p>

            <input type="text" placeholder="Website URL" defaultValue={restaurantData.Website} {...register("website")} />
            <p>{errors.website?.message}</p>

            <textarea placeholder='Facilities' defaultValue={restaurantData.Facilities} {...register("facilities")} />
            <p>{errors.facilities?.message}</p>

            <textarea placeholder='Location'  defaultValue={restaurantData.Location ? restaurantData.Location : "null"}  {...register("location")} />
            <p>{errors.location?.message}</p>

            <input type="file" multiple accept="image/*" placeholder='Images' {...register("image")} />
            <p>{errors.image?.message}</p>

            <ImageUploader />

            <button>Lets Go</button>
        </form>
    </div>
  )
}

export default UpdateRestaurant