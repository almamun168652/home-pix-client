

import { useLoaderData } from 'react-router-dom';
import DashboardTitle from '../../../Components/Dashboard/DashboardTitle/DashboardTitle';
import { useForm } from 'react-hook-form';
import useAxiosOpen from '../../../hooks/useAxiosOpen';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const PropertyUpdate = () => {

    const { register, handleSubmit } = useForm();
    const axiosOpen = useAxiosOpen();
    const axiosSecure = useAxiosSecure();

    const { _id, propertyTitle, propertyLocation, agentName, agentEmail, startPrice, endPrice } = useLoaderData();


    const onSubmit = async (data) => {
        console.log(data);

        const imageFile = { image: data.propertyImage[0] }
        const res = await axiosOpen.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        if (res.data.success) {
            // now send the menu item
            const updatePropertyData = {
                // numberPrice = parseFloat(data.price);
                propertyTitle: data.propertyTitle,
                propertyLocation: data.propertyLocation,
                propertyImage: res.data.data.display_url,
                agentName: data.agentName,
                agentEmail: data.agentEmail,
                startPrice: data.startPrice,
                endPrice: data.endPrice
            }

            console.log(updatePropertyData);

            const updateRes = await axiosSecure.patch(`/properties/update/${_id}`, updatePropertyData);
            console.log('update an item', updateRes.data);
            if (updateRes.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: `${data.name} updated Successfully Done.`,
                    icon: "success"
                });
            }






        }


    }

    return (
        <div>
            <DashboardTitle title='Update Property'></DashboardTitle>


            <div className="md:mx-10 mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-8 rounded-md">
                    <div className="my-2">
                        <label className="text-gray-700">Property Title</label><br />
                        <input defaultValue={propertyTitle} {...register('propertyTitle', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="propertyTitle" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Property Location</label><br />
                        <input defaultValue={propertyLocation} {...register('propertyLocation', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="propertyLocation" id="" />
                    </div>
                    <div>
                        <label className="text-gray-700">Upload Property Image</label><br />
                        {/* <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" /> */}
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <input {...register('propertyImage', { required: true })} type="file" name="propertyImage" className="file-input file-input-bordered border border-gray-500 rounded h-10 w-full max-w-xs" />
                            <span>Please upload your property image here.</span>
                        </div>
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Agent Name</label><br />
                        <input {...register('agentName', { required: true })} type='text' defaultValue={agentName} className="p-[6px] text-black rounded w-full border border-gray-500" name="agentName" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Agent Email</label><br />
                        <input {...register('agentEmail', { required: true })} type='text' defaultValue={agentEmail} className="p-[6px] text-black rounded w-full border border-gray-500" name="agentEmail" id="" readOnly />
                    </div>
                    <div>
                        <label className="text-gray-700">Price Rangle</label><br />
                        <div className="flex flex-col items-center md:flex-row md:gap-2">
                            <div className="my-2 w-full">
                                <input defaultValue={startPrice} {...register('startPrice', { required: true })} type='number' placeholder="000$" className="p-[6px] text-black rounded w-full border border-gray-500" name="startPrice" id="" />
                            </div>
                            <div>
                                <h1>to</h1>
                            </div>
                            <div className="my-2 w-full">
                                <input defaultValue={endPrice} {...register('endPrice', { required: true })} type='number' placeholder="000$" className="p-[6px] text-black rounded w-full border border-gray-500" name="endPrice" id="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="mt-4 bg-[#152475] hover:bg-[#1d32ae] px-8 py-2 rounded-md cursor-pointer text-white">
                            Update Property
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default PropertyUpdate;