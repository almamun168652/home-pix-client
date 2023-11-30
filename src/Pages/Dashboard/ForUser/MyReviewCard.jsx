import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const MyReviewCard = ({ item, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const { _id, userPhoto, propertyTitle, review, reviewDate, reviewTime, agentName } = item || {}

    const handleDeleteReview = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/review/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className='border-2 rounded-lg border-[#152475] p-4 shadow-lg bg-green-100'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-black font-semibold'>Review Date: {reviewDate.slice(0, 10)}</p>
                    <p className='text-black font-semibold'>Review Time: {reviewTime}</p>
                </div>
                <div>
                    <img className='h-10 w-10 rounded-full border-2 border-white' src={userPhoto} alt="" />
                </div>
            </div>


            <h1 className='text-lg text-black font-bold'>{propertyTitle}</h1>
            <div className=''>
                <p className='text-md text-semibold text-gray-800'>{review}</p>
                <p className='text-black font-semibold'>Agent: {agentName}</p>
            </div>

            <div className='flex justify-end'>
                <button onClick={() => handleDeleteReview(_id)} className='px-2 py-1 rounded bg-red-700 text-white hover:bg-red-800'>Delete</button>
            </div>

        </div>
    );
};

MyReviewCard.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}

export default MyReviewCard;