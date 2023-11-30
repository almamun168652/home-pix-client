import PropTypes from 'prop-types';


const SoldProTr = ({ item }) => {

        const { propertyTitle, propertyLocation, buyerEmail, buyerName, offeredAmount } = item || {}



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
            

        </tr>
    );
};

SoldProTr.propTypes = {
    item: PropTypes.object.isRequired,
    // refetch: PropTypes.func
}

export default SoldProTr;