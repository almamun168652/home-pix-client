import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import Loader from "../../../Components/Shared/Loader/Loader";
import PropertyTr from "../../../Components/Dashboard/AdminDashboard/PropertyTr";

const ManageProperties = () => {


    const axiosOpen = useAxiosOpen()
    const { data: manageProperties = [], isPending: propertiesLoading, refetch } = useQuery({
        queryKey: ['manageProperties'],
        queryFn: async () => {
            const res = await axiosOpen.get('/allProperties');
            return res.data;
        }
    })

    if (propertiesLoading) {
        return <Loader></Loader>
    }


    return (
        <div>
            <DashboardTitle title='Manage Properties'></DashboardTitle>

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
                                    Agent Name
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Agent Email
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Price Range
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Verify
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
                            manageProperties.map(item => <PropertyTr key={item._id} refetch={refetch} item={item}></PropertyTr>)
                          }


                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default ManageProperties;