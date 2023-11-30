import PropTypes from 'prop-types';
import { MdLocationOn } from 'react-icons/md';
import { SiStatuspal } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from 'react-router-dom';





const BoughtCard = ({ item }) => {


    const { _id, status, offeredAmount, propertyImage, propertyTitle, propertyLocation, agentName } = item || {}


    return (
        <div>
            <div className="max-w-2xl mx-auto my-4">
                <div className="md:flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                    <div className="relative w-full md:w-1/3 h-52 flex-shrink-0">
                        <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={propertyImage} />
                    </div>

                    <div className="flex flex-col gap-1 py-2">
                        <p className="text-xl font-bold ">{propertyTitle}</p>
                        <div className="flex items-center ">
                            <span className="font-semibold text-[#152475]">Agent: {agentName}</span>
                        </div>

                        <p className="text-gray-700 leading-tight flex text-sm font-semibold items-center gap-1 "><MdLocationOn className='text-sm'></MdLocationOn> <span>{propertyLocation}</span></p>
                        <p className="text-[#152475] leading-tight text-sm font-semibold flex items-center gap-1 "><SiStatuspal className='text-sm'></SiStatuspal> <span>Request Status: {status}</span></p>
                        <p className="text-green-700 leading-tight text-sm font-semibold flex items-center gap-1 "><FaSackDollar className='text-sm'></FaSackDollar> <span>Offered Amount: {offeredAmount} $</span></p>


                        <div className='flex gap-4 mt-3'>
                            {
                                status == 'accepted' && <Link to={`/goPay/${_id}`}><button className='text-white bg-[#152475] px-3 hover:bg-white hover:text-[#152475] font-semibold text-sm py-1 rounded border border-[#152475]'>Pay Now</button></Link>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

BoughtCard.propTypes = {
    item: PropTypes.object.isRequired,
    // refetch: PropTypes.func,
}


export default BoughtCard;