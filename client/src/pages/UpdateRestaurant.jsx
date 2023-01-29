import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ImageUploader from '../components/ImageUploader'
import { useStateContext } from '../contextProviders/ContextProvider'
import AdminNavBar from '../components/AdminNavBar'

const UpdateRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState({})
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    
    
    const retrieveRestaurant = async () => {
        const id = JSON.parse(localStorage.getItem('user')).RestaurantID
        
        try {
            const response = await axios.get("http://localhost:8800/owner_view_restaurant", { params : {id: id} })
            console.log(response.data[0].OpenTime + ":00")
            
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

    // useEffect(() => {
    //     console.log(restaurantData)
    // }, [restaurantData])

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

    // useEffect(() => {

    //     console.log(restaurantData)
    // }, [setRestaurantData])

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
    <div className="">
        <AdminNavBar />
        <div className="flex mt-28 px-16">
            <h1 className='text-2xl font-medium text-gray-700 mb-6 mt-4'>General details</h1>
        </div>
        <div className='ml-16 mt-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-start space-x-16'>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Primary name</h1>
                    <input type="text" placeholder="" defaultValue={restaurantData.Name} {...register("name")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.name?.message}</p>
                </div>
                {/* <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Secondary name</h1>
                    <input type="text" placeholder="" defaultValue={restaurantData.Name} {...register("name")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.name?.message}</p>
                </div> */}
            </div>
            <div className='flex justify-start space-x-8 mt-4'>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 1</h1>
                    <input type="text" placeholder="" defaultValue={restaurantData.AddressLine1} {...register("address1")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.address1?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 2</h1>
                    <input type="text" placeholder="" defaultValue={restaurantData.AddressLine2} {...register("address2")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.address2?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 3</h1>
                    <input type="text" placeholder="" defaultValue={restaurantData.AddressLine3} {...register("address3")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.address3?.message}</p>
                </div>
            </div>
            <div className='mt-6 mb-10'>
                <h1 className='text-base font-medium text-gray-400 mt-4'>Contact No.</h1>
                <input type="text" placeholder="" defaultValue={restaurantData.ContactNumber} {...register("contactNumber")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                <p className="ml-2 text-sm text-rose-600">{errors.contactNumber?.message}</p>
            </div>
            
            {/* <input type="text" placeholder="Cuisine" defaultValue={restaurantData.Cuisine} {...register("cuisine")} />
            <p>{errors.cuisine?.message}</p> */}
            <div className='border-t-2 border-teal-500 pb-8'>
                <h1 className='text-2xl font-medium text-gray-700 mt-10'>Menu & Working hours</h1>
                <div className='flex justify-between '>
                    <div>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Cuisine document</h1>
                        <input type="file" multiple accept="image/*" placeholder="" {...register("menu")} className="w-[450px] h-16 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.menu?.message}</p>
                    </div>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Operation hours</h1>
                        <div className='flex justify-start space-x-2'>
                            <input type="time" defaultValue={restaurantData.OpenTime} {...register("open")} className="w-[220px] h-12 bg-teal-100 border-0 rounded-lg"/>
                            <p className="ml-2 text-sm text-rose-600">{errors.open?.message}</p>
                            <input type="time" defaultValue={restaurantData.CloseTime} {...register("close")} className="w-[220px] h-12 bg-teal-100 border-0 rounded-lg"/>
                            <p className="ml-2 text-sm text-rose-600">{errors.close?.message}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-t-2 border-teal-500 pb-8'>
                <h1 className='text-2xl font-medium text-gray-700 mt-10'>Images & Location</h1>
                <h1 className='text-base font-medium text-gray-400 mt-10'>Enter your images</h1>
                {/* <ImageUploader /> */}
                <h1 className='text-base font-medium text-gray-400 mt-10'>Search your restaurant loaaction on Google maps and copy the browser URL and paste here</h1>
                <input type="text" placeholder="" defaultValue={restaurantData.Website} {...register("website")} className="w-[960px] h-12 bg-teal-100 border-0 rounded-lg"/>
                <p className="ml-2 text-sm text-rose-600">{errors.website?.message}</p>
            </div>
            <input type="text" placeholder="Cuisine" defaultValue={restaurantData.Cuisine} {...register("cuisine")} />
            <p>{errors.cuisine?.message}</p>


            <input type="time" defaultValue={restaurantData.OpenTime} {...register("open")} />
            <p>{errors.open?.message}</p>

            <input type="time" defaultValue={restaurantData.CloseTime} {...register("close")} />
            <p>{errors.close?.message}</p>

            <input type="text" placeholder="Parking" defaultValue={restaurantData.ParkingDetails} {...register("parking")} />
            <p>{errors.parking?.message}</p>

            <input type="text" placeholder="Payment Options" defaultValue={restaurantData.PaymentOption} {...register("payment")} />
            <p>{errors.payment?.message}</p>

            <textarea placeholder='Facilities' defaultValue={restaurantData.Facilities} {...register("facilities")} />
            <p>{errors.facilities?.message}</p>

            <textarea placeholder='Location'  defaultValue={restaurantData.Location ? restaurantData.Location : "null"}  {...register("location")} />
            <p>{errors.location?.message}</p>

            {/* <input type="file" multiple accept="image/*" placeholder="Menu" {...register("menu")} />
            <p>{errors.menu?.message}</p>

            <input type="file" multiple accept="image/*" placeholder='Images' {...register("image")} />
            <p>{errors.image?.message}</p> */}


            <button>Lets Go</button>
        </form>

        {restaurantData && <ImageUploader id={restaurantData.RestaurantID} data={restaurantData} />}
        
        </div>
    </div>
  )
}

export default UpdateRestaurant