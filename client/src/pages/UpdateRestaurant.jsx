import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const UpdateRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState({})

    const retrieveRestaurant = () => {
        try {
            const response = axios.get("http://localhost:8800/owner_view_restaurant")

            setRestaurantData(restaurantData)
        } catch (error) {
            console.log(error);
        }
    }

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
            <input type="text" placeholder="Name" {...register("name")} />
            <p>{errors.name?.message}</p>

            <input type="text" placeholder="Address Line 1" {...register("address1")} />
            <p>{errors.address1?.message}</p>

            <input type="text" placeholder="Address Line 2" {...register("address2")} />
            <p>{errors.address2?.message}</p>

            <input type="text" placeholder="Address Line 3" {...register("address3")} />
            <p>{errors.address3?.message}</p>

            <input type="text" placeholder="Contact Number" {...register("contactNumber")} />
            <p>{errors.contactNumber?.message}</p>
            
            <input type="text" placeholder="Cuisine" {...register("cuisine")} />
            <p>{errors.cuisine?.message}</p>

            <input type="file" multiple accept="image/*" placeholder="Menu" {...register("menu")} />
            <p>{errors.menu?.message}</p>

            <input type="time" {...register("open")} />
            <p>{errors.open?.message}</p>

            <input type="time" {...register("close")} />
            <p>{errors.close?.message}</p>

            <input type="text" placeholder="Parking" {...register("parking")} />
            <p>{errors.parking?.message}</p>

            <input type="text" placeholder="Payment Options" {...register("payment")} />
            <p>{errors.payment?.message}</p>

            <input type="text" placeholder="Website URL" {...register("website")} />
            <p>{errors.website?.message}</p>

            <textarea placeholder='Facilities' {...register("facilities")} />
            <p>{errors.facilities?.message}</p>

            <textarea placeholder='Location' {...register("location")} />
            <p>{errors.location?.message}</p>

            <input type="file" multiple accept="image/*" placeholder='Images' {...register("image")} />
            <p>{errors.image?.message}</p>


            <button>Lets Go</button>
        </form>
    </div>
  )
}

export default UpdateRestaurant