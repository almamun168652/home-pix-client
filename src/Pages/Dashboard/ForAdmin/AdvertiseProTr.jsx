import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AdvertiseProTr = ({ item }) => {

    const axiosSecure = useAxiosSecure();

    const { _id, propertyImage, propertyTitle, propertyLocation, status, startPrice, endPrice, agentName , agentEmail } = item || {}

    const addAdvertise = async () => {


        const advertiseData = {
            advertiseId: _id,
            propertyImage,
            propertyTitle,
            startPrice,
            endPrice,
            agentName,
            propertyLocation,
            status,
            agentEmail
        }

        const advertiseRes = await axiosSecure.post('/advertise', advertiseData);
        console.log(advertiseRes.data);

        if (advertiseRes.data.insertedId) {
            // show success popup
            Swal.fire({
                title: "Success!",
                text: `successfully added.`,
                icon: "success"
            });
        }

    }


    const advertiseDelete = id => {
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
                axiosSecure.delete(`/advertise/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Advertise has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    // const handlePropertyVerified = id => {
    //     axiosSecure.patch(`/property/verified/${id}`)
    //         .then(res => {
    //             console.log(res.data);
    //             if (res.data?.modifiedCount > 0) {
    //                 refetch()
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${propertyTitle} Verified Successfully!`,
    //                     showConfirmButton: false,
    //                     timer: 2500
    //                 });
    //             }
    //         })
    // }

    // const handlePropertyRejected = id => {
    //     axiosSecure.patch(`/property/rejected/${id}`)
    //         .then(res => {
    //             console.log(res.data);
    //             if (res.data?.modifiedCount > 0) {
    //                 refetch()
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${propertyTitle} Verified Successfully!`,
    //                     showConfirmButton: false,
    //                     timer: 2500
    //                 });
    //             }
    //         })
    // }




    return (
        <tr className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">

            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                <img className='w-20' src={propertyImage} alt="" />
            </th>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {propertyTitle}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                ${startPrice}-{endPrice}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {agentName}
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                <button onClick={addAdvertise} className='border bg-green-700 text-white border-green-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer '>Advertise</button>
            </td>
            <td className="px-2 py-2 text-gray-900 font-medium">
                <button onClick={()=> advertiseDelete(_id)}
                    className='border bg-red-700 text-white border-red-700 text-xs font-bold px-2 py-1 rounded md cursor-pointer'>Remove Advertise</button>
            </td>

        </tr>
    );
};

AdvertiseProTr.propTypes = {
    item: PropTypes.object.isRequired,
    // refetch: PropTypes.func
}

export default AdvertiseProTr;