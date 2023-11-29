import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import useAxiosOpen from "../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Offered = () => {

    // const axiosOpen = useAxiosOpen();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit , reset } = useForm();
    const { user } = useAuth();
    const { propertyTitle, propertyLocation, agentName ,startPrice, endPrice ,agentImage, agentEmail ,  propertyImage , _id , propertyId , } = useLoaderData();


    const onSubmit = async (data) => {
        console.log(data);

        const offeredInfo = {
            wishlistId: _id,
            propertyId: propertyId,
            propertyTitle: data.propertyTitle,
            propertyImage,
            propertyLocation: data.propertyLocation,
            agentName: data.agentName,
            agentImage,
            agentEmail,
            startPrice,
            endPrice,
            offeredAmount: data.offeredAmount,
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            buyingDate: data.buyingDate,
            status: 'pending'
        }

        console.log(offeredInfo);

        const offeredRes = await axiosSecure.post('/offered', offeredInfo);
            console.log(offeredRes.data);

            if (offeredRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    title: "Success!",
                    text: `Offered successfully..`,
                    icon: "success"
                });
            }


    }





    return (
        <div>

            <DashboardTitle title="Make an offer"></DashboardTitle>

            <div className="md:mx-10 mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-8 rounded-md">
                    <div className="my-2">
                        <label className="text-gray-700">Property Title</label><br />
                        <input defaultValue={propertyTitle} {...register('propertyTitle', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="propertyTitle" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Property Location</label><br />
                        <input defaultValue={propertyLocation} {...register('propertyLocation', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="propertyLocation" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Agent Name</label><br />
                        <input defaultValue={agentName} {...register('agentName', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="agentName" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Offered Amount</label><br />
                        <input placeholder="$100000" {...register('offeredAmount', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="number" name="offeredAmount" id="" />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Buyer Name</label><br />
                        <input defaultValue={user?.displayName} {...register('buyerName', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="buyerName" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Buyer Email</label><br />
                        <input defaultValue={user?.email} {...register('buyerEmail', { required: true })} className="p-[6px] text-black rounded w-full border border-gray-500" type="text" name="buyerEmail" id="" readOnly />
                    </div>
                    <div className="my-2">
                        <label className="text-gray-700">Buying Date</label><br />
                        {/* <DatePicker {...register('buyingDate', { required: true })} name="buyingDate" className="input input-bordered w-full text-black border-gray-500" selected={buyingDate} onChange={(date) => setBuyingDate(date)} /> */}
                        <input {...register('buyingDate', { required: true })} name="buyingDate" type="date" id="" className="p-[6px] text-black rounded w-full border border-gray-500" />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="mt-4 bg-[#152475] hover:bg-[#1d32ae] px-8 py-2 rounded-md cursor-pointer text-white">
                            Make an Offer
                        </button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Offered;