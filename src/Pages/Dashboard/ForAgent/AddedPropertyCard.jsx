import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { axiosSecure } from '../../../hooks/useAxiosSecure';




const AddedPropertyCard = ({ item , refetch }) => {

    const { _id, startPrice, endPrice, status, propertyImage, propertyTitle, propertyLocation, agentName, agentImage } = item || {}


    const handlePropertyDelete = async (_id) => {

        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete it?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                   axiosSecure.delete(`/addedProperty/${_id}`)
                   .then(res => {
                    if(res.data.deletedCount > 0){
                        Swal.fire("Delete", "Successfully Delete", "success");
                        refetch();
                    }
                   })
                }
            })

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <img src={propertyImage} alt="Mountain" className="w-full h-52 object-cover" />
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={agentImage} alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                            <span className="text-gray-800 font-semibold">{agentName}</span>
                        </div>
                        <span className={"border border-[#152475] text-[#152475] text-xs font-semibold px-2 py-1 rounded-full"}>
                            {(status == 'verify') ? 'pending' : status}
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{propertyTitle}</h2>
                    <p className="text-gray-700 leading-tight mb-2 flex items-center gap-1 font-semibold"><MdLocationOn className='text-lg'></MdLocationOn> <span>{propertyLocation}</span></p>
                    <p className="text-gray-700 leading-tight mb-2 flex items-center gap-1 font-semibold"><HiCurrencyDollar className='text-lg'></HiCurrencyDollar> <span>Price Ragne: {startPrice} - {endPrice} $</span></p>
                    <p className="text-gray-700 leading-tight mb-2"></p>
                    <div className='flex justify-end'>
                        <div className='flex gap-4 mt-3'>
                            <Link to={`update/${_id}`}>
                                <button
                                    disabled={status == 'rejected'}
                                    className="font-semibold px-3 py-1 rounded border bg-green-700 hover:bg-green-600 text-white"
                                >
                                    Update
                                </button>
                            </Link>
                            <button
                                onClick={() => handlePropertyDelete(_id)}
                                className="font-semibold px-3 py-1 rounded border bg-red-700 hover:bg-red-600 text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddedPropertyCard.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}


export default AddedPropertyCard;