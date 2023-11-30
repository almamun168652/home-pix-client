import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';




const AdvertieseCard = ({ item }) => {

    const { startPrice, advertiseId, endPrice, status, propertyImage, propertyTitle, propertyLocation, agentName } = item || {}

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg border w-full">
                <img src={propertyImage} alt="Mountain" className="w-full h-52 object-cover" />
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-gray-800 font-semibold">Agent: {agentName}</span>
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
                            <Link to={`/verifiedProperty/details/${advertiseId}`}>
                                <button className="bg-[#152475] hover:bg-[#1d1575] px-4 py-1 mt-1 rounded md cursor-pointer text-white">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AdvertieseCard.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}


export default AdvertieseCard;