import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosOpen from '../../../hooks/useAxiosOpen';


const UsersTr = ({ item, refetch, index }) => {

    const axiosSecure = useAxiosSecure();
    const axiosOpen = useAxiosOpen();

    const { name, email, _id, role } = item || {}


    const handleMakeAdmin = id => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is An Admin Now!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    const handleMakeAgent = id => {
        axiosSecure.patch(`/users/agent/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is An Agent Now!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }


    const getFraudAgentProperties = async (email) => {
        const { data } = await axiosOpen(`/fraudAgentProperties/${email}`);
        return data;
    };

    const fraudPropertyCick = async (fraudPropertiesIdsArray) => {
        const { data } = await axiosOpen.post(`/fraudPropertyCick`, fraudPropertiesIdsArray);
        return data;
    };


    const handleMarkAsFraud = (id) => {
        axiosSecure.patch(`/users/fraud/${id}`)
            .then(async res => {
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    const fraudData = await getFraudAgentProperties(email);

                    const fraudPropertiesId = fraudData.map(item => item._id);

                    const data = await fraudPropertyCick(fraudPropertiesId);

                    console.log(data);


                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `This agent will fraud.!`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }




    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }



    return (
        <tr className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">

            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
            </th>
            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {name}
            </th>
            <td className="px-2 py-2 text-gray-900 font-medium">
                {email}
            </td>
            <td className="px-2 py-2 text-gray-900 text-center">
                <Link to={``}>
                    {
                        role == "fraud" ? <span className='font-bold'>Fraud</span> :
                            <>
                                {role === 'admin' ? <span className='font-bold'>Admin</span> : <button onClick={() => handleMakeAdmin(_id)} className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Make Admin</button>}
                            </>
                    }
                </Link>
            </td>
            <td className="px-2 py-2 text-gray-900 text-center">
                <Link to={``}>

                    {
                        role == "fraud" ? <span className='font-bold'>Fraud</span> :
                            <>
                                {role === 'agent' ? <span className='font-bold'>Agent</span> : <button onClick={() => handleMakeAgent(_id)} className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Make Agent</button>}
                            </>
                    }

                </Link>
            </td>


            <td className='px-2 py-2 text-gray-900 text-center'>
                {
                    role == "fraud" ? <span className='  font-bold'>Fraud</span> :
                        <>
                            {
                                role === 'agent' ? <td>
                                    <Link to={``}>
                                        <button onClick={() => handleMarkAsFraud(_id)} className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Mark As Fraud</button>
                                    </Link>
                                </td> : <td></td>
                            }
                        </>
                }

            </td>


            <td scope="row" className="px-2 py-2 text-gray-900">
                {/* AiFillDelete */}
                <AiFillDelete onClick={() => handleDeleteUser(_id)} className='mx-auto cursor-pointer text-3xl text-red-700 hover:text-[#152475]'></AiFillDelete>
            </td>
        </tr>
    );
};

UsersTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
    index: PropTypes.number,
}

export default UsersTr;