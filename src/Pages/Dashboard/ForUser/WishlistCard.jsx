import PropTypes from 'prop-types';
import { HiCurrencyDollar } from 'react-icons/hi2';
import { MdLocationOn } from 'react-icons/md';
import { GrStatusGoodSmall } from "react-icons/gr";
import { Link } from 'react-router-dom';



const WishlistCard = ({ item }) => {


    const { _id, startPrice, endPrice, status, propertyImage, propertyTitle, propertyLocation, agentName, agentImage } = item || {}


    return (
        <div>
            <div className="max-w-2xl mx-auto my-4">
                <div className="md:flex gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">

                    <div className="relative w-full md:w-1/3 h-52 flex-shrink-0">
                        <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={propertyImage} />
                    </div>

                    <div className="flex flex-col gap-0.5 py-2">

                        <div className="flex items-center">
                            <img src={agentImage} alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                            <span className="text-gray-800 font-semibold">Agent: {agentName}</span>
                        </div>
                        <p className="text-xl font-bold">{propertyTitle}</p>
                        <p className="text-gray-700 leading-tight flex text-sm font-semibold items-center gap-1 "><MdLocationOn className='text-sm'></MdLocationOn> <span>{propertyLocation}</span></p>
                        <p className="text-gray-700 leading-tight text-sm font-semibold flex items-center gap-1 "><HiCurrencyDollar className='text-sm'></HiCurrencyDollar> <span>Price Ragne: {startPrice} - {endPrice} $</span></p>
                        <p className="text-gray-700 leading-tight text-sm font-semibold flex items-center gap-1 "><GrStatusGoodSmall className='text-sm'></GrStatusGoodSmall> <span>Status: {status}</span></p>

                        <div className='flex gap-4 mt-3'>
                            <Link to={`offered/${_id}`}>
                                <button

                                    className="font-semibold px-3 py-1 rounded border bg-green-700 hover:bg-green-600 text-white"
                                >
                                    Make an Offer
                                </button>
                            </Link>
                            <button

                                className="font-semibold px-3 py-1 rounded border bg-red-700 hover:bg-red-600 text-white"
                            >
                                Remove
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

WishlistCard.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}


export default WishlistCard;