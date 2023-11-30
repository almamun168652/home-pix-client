import PropTypes from 'prop-types';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const RequestedTr = ({ item, refetch }) => {

    const axiosSecure = useAxiosSecure();

    const { _id, propertyTitle, propertyLocation, status, buyerEmail, buyerName, offeredAmount } = item || {}


    const handleRequestAccept = id => {
        axiosSecure.patch(`/request/accept/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${propertyTitle} request accepted.`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }


    const handleRequestReject = id => {
        axiosSecure.patch(`/request/reject/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${propertyTitle} has been rejected.`,
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
                {buyerName}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {buyerEmail}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                $ {offeredAmount}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {
                    status == 'accepted' ? <button
                        disabled={true}
                        className='border bg-green-700 text-white border-green-700 text-xs font-bold px-2 py-1 rounded-md'>Accepted</button> :
                        <>
                            {
                                status == 'rejected' ? <button
                                    disabled={true}
                                    className='border bg-slate-500 hover:text-white border-slate-700 text-xs font-bold px-2 py-1 rounded md text-white'>Accept</button> :
                                    <button
                                        onClick={() => handleRequestAccept(_id)}
                                        className='border hover:bg-green-700 hover:text-white border-green-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer text-green-700'>Accept</button>
                            }
                        </>
                }
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {
                    status == 'rejected' ? <button
                        disabled={true}
                        className='border bg-red-700 text-white border-red-700 text-xs font-bold px-2 py-1 rounded md'>Rejected</button> :
                        <>
                            {
                                status == 'accepted' ? <button
                                    disabled={true}
                                    className='border bg-slate-500 hover:text-white border-slate-700 text-xs font-bold px-2 py-1 rounded md text-white'>Reject</button> :
                                    <button
                                        onClick={() => handleRequestReject(_id)}
                                        className='border hover:bg-red-700 hover:text-white border-red-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer text-red-700'>Reject</button>
                            }
                        </>
                }
            </td>

        </tr>
    );
};

RequestedTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func
}

export default RequestedTr;