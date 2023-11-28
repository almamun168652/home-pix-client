import PropTypes from 'prop-types';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const PropertyTr = ({ item, refetch }) => {
    
    const axiosSecure = useAxiosSecure();

    const { _id, status,  propertyTitle, propertyLocation, agentName, agentEmail, startPrice, endPrice } = item || {}


    const handlePropertyVerified = id => {
        axiosSecure.patch(`/property/verified/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${propertyTitle} Verified Successfully!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    const handlePropertyRejected = id => {
        axiosSecure.patch(`/property/rejected/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${propertyTitle} Verified Successfully!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }




    return (
        <tr className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">

            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {propertyTitle}
            </th>
            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {propertyLocation}
            </th>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {agentName}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {agentEmail}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                ${startPrice}-{endPrice}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                <button onClick={()=> handlePropertyVerified(_id)} className='border hover:bg-green-700 hover:text-white border-green-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer text-green-700'>{status == 'verified' ? 'Verified' : 'verify'}</button>
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                <button disabled={status == 'rejected'}
                 onClick={()=> handlePropertyRejected(_id)}  className='border hover:bg-red-700 hover:text-white border-red-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer text-red-700'>{status == "rejected" ? 'Rejected' : 'Reject'}</button>
            </td>

        </tr>
    );
};

PropertyTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func
}

export default PropertyTr;