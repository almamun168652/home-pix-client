import PropTypes from 'prop-types';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UsersTr = ({ item, refetch, index }) => {

    const { name, email, role } = item || {}

    return (
        <tr className="bg-sky-300 border-b  dark:border-gray-700 hover:bg-gray-50">

            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
            </th>
            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap">
                {name}
            </th>
            <td className="px-2 py-2 text-gray-900">
                {email}
            </td>
            <td className="px-2 py-2 text-gray-900">
                <Link to={``}>
                    <button className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Make Admin</button>
                </Link>
            </td>
            <td className="px-2 py-2 text-gray-900">
                <Link to={``}>
                    <button className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Make Agent</button>
                </Link>
            </td>
            <td>
                <Link to={``}>
                    <button className='border hover:bg-[#152475] hover:text-white border-[#152475] text-xs font-bold px-2 py-1 rounded md cursor-pointer text-[#152475]'>Make As Fraud</button>
                </Link>
            </td>
            <td scope="row" className="px-2 py-2 text-gray-900">
                {/* AiFillDelete */}
                <AiFillDelete className='mx-auto cursor-pointer text-3xl text-red-700 hover:text-[#152475]'></AiFillDelete>
            </td>
        </tr>
    );
};

UsersTr.propTypes = {
    item: PropTypes.object.isRequired,
    refetch: PropTypes.func,
}

export default UsersTr;