import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import Loader from "../../../Components/Shared/Loader/Loader";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SoldProTr from "./SoldProTr";

const MySoldProperties = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: soldProperties = [], isPending: soldPropertiesLoading } = useQuery({
        queryKey: ['soldProperties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/soldProperties?email=${user.email}`);
            return res.data;
        }
    })

    if (soldPropertiesLoading) {
        return <Loader></Loader>
    }

    // const { propertyTitle, propertyLocation, buyerEmail, buyerName, offeredAmount } = soldProperties || {}

    return (
        <div>
            <DashboardTitle title="My Sold Properties"></DashboardTitle>

            <div>
                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#152475] text-white">
                            <tr>

                                <th scope="col" className="px-2 py-3">
                                    Property Title
                                </th>

                                <th scope="col" className="px-2 py-3">
                                    Property Location
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Buyer Name
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Buyer Email
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Sold Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                data.map(item => <MyjobTr refetch={refetch} key={item._id} item={item}></MyjobTr>)
                            } */}

                       {
                            soldProperties.map(item => <SoldProTr key={item._id} item={item}></SoldProTr>)
                       }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySoldProperties;