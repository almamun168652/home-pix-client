import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useRole from "../../hooks/useRole";


const Details = () => {


    const [userRole] = useRole();
    const reviewDate = new Date();

    const axiosSecure = useAxiosSecure();
    const { _id, startPrice, description, endPrice, status, propertyImage, propertyTitle, propertyLocation, agentName, agentImage, agentEmail } = useLoaderData();

    const {photo , name , email} = userRole || {}

    console.log(reviewDate);

    const handleAddWishlist = async () => {
        const wishlistItem = {
            propertyId: _id,
            propertyImage,
            propertyTitle,
            propertyLocation,
            startPrice,
            endPrice,
            agentName,
            agentEmail,
            agentImage,
            description,
            status: 'pending',
        }

        const wishlistRes = await axiosSecure.post('/wishlist', wishlistItem);
        console.log(wishlistRes.data);

        if (wishlistRes.data.insertedId) {
            // show success popup
            Swal.fire({
                title: "Success!",
                text: `${propertyTitle} is added wishlist successfully.`,
                icon: "success"
            });
        }
    }


    const handleReviewSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const reviewInfo = {
            propertyId: _id,
            propertyImage,
            propertyTitle,
            propertyLocation,
            startPrice,
            endPrice,
            agentName,
            agentEmail,
            agentImage,
            description,
            userName: name,
            userEmail: email,
            userPhoto: photo,
            review: form.review.value,
            reviewDate,
        }

        const reviewRes = await axiosSecure.post('/review', reviewInfo);
        console.log(reviewRes.data);

        if (reviewRes.data.insertedId) {
            // show success popup
            Swal.fire({
                title: "Success!",
                text: `Review Send successfully.`,
                icon: "success"
            });
        }

    }

    console.log(startPrice)


    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                <div className="rounded overflow-hidden flex flex-col max-w-2xl mx-auto border">
                    <div className="sm:flex justify-between items-center pt-4 px-5">
                        <a
                            className="sm:w-8/12 md:text-xl font-semibold md:font-bold inline-block transition duration-500 ease-in-out  mb-2">{propertyTitle}</a>
                        <div className="sm:w-4/12 flex items-center sm:px-6 pb-4">
                            <a
                                href="#"><img className="w-10 h-10 rounded-full mr-2" src={agentImage} alt="Avatar of Jonathan Reinink" /></a>
                            <div className="text-xs">
                                <a className="text-gray-900 font-medium md:font-semibold md:text-lg leading-none ">{agentName}</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="w-full h-[300px] object-cover" src={propertyImage} alt="Sunset in the mountains" />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-between flex-col md:flex-row">
                            <h1 className="text-lg font-semibold">Price Range: {startPrice}-{endPrice} $</h1>
                            <span className={"border border-[#152475] text-[#152475] text-md font-semibold px-2 py-1 rounded-full"}>
                                {(status == 'verify') ? 'pending' : status}
                            </span>
                        </div>
                        <h1 className="text-lg font-semibold">Property Location: ${propertyLocation}</h1>
                        <p className="text-sm my-2">{description}</p>
                        <div className='flex justify-end'>
                            <div className='flex gap-4 mt-3'>
                                <button onClick={handleAddWishlist} className="bg-[#152475] px-4 py-1 text-white border border-[#152475] hover:bg-transparent hover:text-[#152475] ">Add To Wishlist</button>
                                <label htmlFor="applyJobModal" className="bg-[#152475] px-4 py-1 text-white border border-[#152475] hover:bg-transparent hover:text-[#152475] ">Add a review</label>

                                <input type="checkbox" id="applyJobModal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <label htmlFor="applyJobModal" className="flex justify-end">
                                            <AiOutlineCloseCircle className="text-4xl"></AiOutlineCloseCircle>
                                        </label>

                                        <h3 className="font-bold text-xl text-center">Your Review</h3>
                                        <form onSubmit={handleReviewSubmit}>
                                            <div className="my-2">
                                                <label className="text-gray-700">Property Title</label><br />
                                                <input className="p-[6px] text-black rounded w-full border border-gray-500" defaultValue={propertyTitle} type="text" name="modalProperty" id="" readOnly/>
                                            </div>

                                            <div className="my-2">
                                                <label className="text-gray-700">Review Here</label><br />
                                                <textarea className="p-[6px] text-black rounded w-full border border-gray-500" name="review" id="" cols="20" rows="5"></textarea>
                                            </div>

                                            <div method="dialog" className="flex justify-end">
                                                <button type="submit" className="mt-4">
                                                    <label className="bg-[#152475] px-8 py-2 rounded-md cursor-pointer text-white" htmlFor="applyJobModal">Submit Review</label>
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Details;