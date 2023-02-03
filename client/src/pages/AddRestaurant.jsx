import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'
import { useEffect } from 'react'
import { useStateContext } from '../contextProviders/ContextProvider'
import ImageUploader from '../components/ImageUploader'
import { useLocation, useNavigate } from 'react-router'

const AddRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState({})
    const { sidebarActive, setSidebarActive ,setRestaurantSidebar} = useStateContext();

    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        setSidebarActive(false)
        setRestaurantSidebar(false)
        console.log(state.email)
    }, [])

    
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        address1: yup.string().required(),
        address2: yup.string().required(),
        address3: yup.string(),
        contactNumber: yup.string().length(10).required(),
        cuisine: yup.string().required(),
        // menu: yup.mixed()
        //         .test("required", "You need to provide a file", (file) => {
        //         return file && file.length
        // }),
        open: yup.string().required(),
        close: yup.string().required(),
        parking: yup.string().required(),
        payment: yup.string().required(),
        website: yup.string().url(),
        facilities: yup.string().required(),
        location: yup.string(),
        password: yup.string().required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
        email: yup.string()
        // image: yup.mixed().required()
        //         .test("required", "You need to provide a file", (file) => {
        // return file && file.length
        // }),
     })
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(() => {

        console.log(restaurantData)
    }, [setRestaurantData])

    const onSubmit = async (data) => {
        console.log(data)

        setRestaurantData(data)

        try {
            const response = await axios.post("http://localhost:8800/add_restaurant_details", data)    
            console.log(response)

            if(response.data.affectedRows > 0){
                navigate('/admin_login')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='mx-auto'>
            <div className="flex mt-12">
                <h1 className='text-3xl font-medium text-gray-700 mb-6 mt-4'>Please fill the below details before proceed</h1>
            </div>
        <div className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='pb-8'>
                <h1 className='text-xl font-medium text-gray-700 mt-10'>General details</h1>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-8'>Restaurant name</h1>
                    <input type="text" placeholder="" {...register("name")} className="w-full h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.name?.message}</p>
                </div>
                <div className='flex justify-start space-x-8 mt-4'>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 1</h1>
                        <input type="text" placeholder="" {...register("address1")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.address1?.message}</p>
                    </div>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 2</h1>
                        <input type="text" placeholder="" {...register("address2")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.address2?.message}</p>
                    </div>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-4'>Display address line 3</h1>
                        <input type="text" placeholder="" {...register("address3")} className="w-[300px] h-12 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.address3?.message}</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <h1 className='text-base font-medium text-gray-400 mt-4'>Contact No.</h1>
                    <input type="text" placeholder="" {...register("contactNumber")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.contactNumber?.message}</p>
                </div>
            </div>
            <div className='border-t-2 border-teal-500 pb-8'>
                <h1 className='text-xl font-medium text-gray-700 mt-10'>Cuisine & Working hours</h1>
                <div className='flex justify-between '>
                    <div>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Cuisine</h1>
                        <input type="text" placeholder="Type available cuisines" {...register("cuisine")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.cuisine?.message}</p>
                    </div>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Operation hours</h1>
                        <div className='flex justify-start space-x-2'>
                            <input type="time" {...register("open")} className="w-[220px] h-12 bg-teal-100 border-0 rounded-lg"/>
                            <p className="ml-2 text-sm text-rose-600">{errors.open?.message}</p>
                            <input type="time" {...register("close")} className="w-[220px] h-12 bg-teal-100 border-0 rounded-lg"/>
                            <p className="ml-2 text-sm text-rose-600">{errors.close?.message}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='border-t-2 border-teal-500 pb-8'>
                <h1 className='text-xl font-medium text-gray-700 mt-10'>Parking & Facilities</h1>
                <div className='flex justify-between '>
                    <div>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Parking</h1>
                        <input type="text" placeholder="Available or Not" {...register("parking")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.parking?.message}</p>
                    </div>
                    <div className='block'>
                        <h1 className='text-base font-medium text-gray-400 mt-10'>Facilities</h1>
                        <textarea {...register("facilities")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg mt-2"/>
                        <p className="ml-2 text-sm text-rose-600">{errors.facilities?.message}</p>       
                    </div>
                </div>
            </div>

            <div className='border-t-2 border-teal-500 pb-8'>
                <h1 className='text-xl font-medium text-gray-700 mt-10'>Other</h1>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-10'>Payment options</h1>
                    <input type="text" placeholder="Type available payment options" {...register("payment")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.payment?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-8'>Location URL</h1>
                    <input type="text" placeholder='Take the location URL of your restaurant from Google Maps and paste here' {...register("location")} className="w-full h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.location?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-8'>Website URL</h1>
                    <input type="text" placeholder="If website available please paste the URL here" {...register("website")} className="w-full h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.website?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-10'>New Password</h1>
                    <input type="password" placeholder="Password" {...register("password")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.password?.message}</p>
                </div>
                <div className='block'>
                    <h1 className='text-base font-medium text-gray-400 mt-10'>Confirm Password</h1>
                    <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} className="w-[450px] h-12 bg-teal-100 border-0 rounded-lg"/>
                    <p className="ml-2 text-sm text-rose-600">{errors.confirmPassword && "Passwords do not match"}</p>
                </div>
                <input type="text" hidden placeholder="" style={{ padding: 0 }} {...register("email")} value={state.email}/>
            </div>
            <div className='my-14 mx-80'>
                <button className="w-72 h-12 text-lg bg-teal-500 text-white font-medium hover:bg-teal-700 duration-300 rounded-md px-2">Add details</button>
            </div>

            {/* <input type="file" multiple accept="image/*" placeholder="Menu" {...register("menu")} />
            <p>{errors.menu?.message}</p> */}

            {/* <input type="file" accept="image/*" name='image' placeholder='Images' {...register("image")} />
            <p>{errors.image?.message}</p> */}

            {/* <ImageUploader register={register} errors={errors} /> */}
        </form>
    </div>
    </div>
  )
}

export default AddRestaurant