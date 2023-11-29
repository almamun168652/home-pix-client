import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Shared/Loader/Loader";
import AdvertiseProTr from "./AdvertiseProTr";


const AdvertiseProperty = () => {

    const axiosSecure = useAxiosSecure()
    const { data: verifiedProperties = [], refetch, isPending: verifiedPropertiesLoading } = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/verifiedProperties`);
            return res.data;
        }
    })

    if (verifiedPropertiesLoading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <DashboardTitle title="Advertise Property"></DashboardTitle>

            <div>
                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#152475] text-white">
                            <tr>
                                <th scope="col" className="px-2 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Price Range
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Agent Name
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Advertise
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Remove Advertise
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                data.map(item => <MyjobTr refetch={refetch} key={item._id} item={item}></MyjobTr>)
                            } */}
                            {
                                verifiedProperties.map(item => <AdvertiseProTr key={item._id} item={item} refetch={refetch}></AdvertiseProTr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProperty;