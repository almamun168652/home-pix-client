import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Shared/Loader/Loader";
import RequestedTr from "./RequestedTr";


const RequestedProperties = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: myRequested = [], refetch, isPending: isPropertiesLoading } = useQuery({
        queryKey: ['myRequested', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myRequested?email=${user.email}`);
            return res.data;
        }
    })

    if (isPropertiesLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <DashboardTitle title="Requested Properties"></DashboardTitle>


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
                                    Offered Amount
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Accept
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Reject
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                data.map(item => <MyjobTr refetch={refetch} key={item._id} item={item}></MyjobTr>)
                            } */}
                            {
                                myRequested.map(item => <RequestedTr key={item._id} item={item} refetch={refetch}></RequestedTr>)
                            }
                         

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default RequestedProperties;