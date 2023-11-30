
import PropTypes from 'prop-types';






const LatestReviewCard = ({ item }) => {

    const { userName, userPhoto, review, propertyTitle } = item || {}

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="w-full hover:shadow-indigo-300 hover:shadow-lg rounded-lg border ">
                    <div className="flex justify-center items-start flex-col p-5 ">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            className="icon icon-tabler icon-tabler-quote rotate-180 text-[#152475]" viewBox="0 0 24 24">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
                            </path>
                        </svg>

    
                            <h1 className='text-lg text-black font-bold'>{propertyTitle}</h1>



   
                            <p className='h-20'>
                                {review}
                            </p>
            

                        <div className="flex justify-center items-start flex-col text-left gap-5">

                            <div className='mt-4'>
                                <div className="flex items-center">
                                    <img src={userPhoto} alt="Avatar" className="w-8 h-8 rounded-full mr-2 object-cover" />
                                    <span className="text-gray-800 font-semibold">{userName}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#152475] p-0.5 rounded-b-lg"></div>
                </div>
            </div>
        </div>
    );
};

LatestReviewCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default LatestReviewCard;