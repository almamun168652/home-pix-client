
import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../Shared/Loader/Loader";
import UsersTr from "./UsersTr";


const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], isLoading: usersLoading , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    if (usersLoading) {
        return <Loader></Loader>
    }

    return (
        <div className="w-full">
            <DashboardTitle title='Manage Users'></DashboardTitle>

            <div>
                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs uppercase bg-[#152475] text-white">
                            <tr>

                                <th scope="col" className="px-2 py-3">
                                    SL.No.
                                </th>

                                <th scope="col" className="px-2 py-3">
                                    Username
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    User Email
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Make Admin
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Make Agent
                                </th>
                                <th scope="col" className="px-2 py-3">
                                    Mark As Fraud
                                </th>
                                <th scope="col" className="px-2 py-3 text-center">
                                    Delete User
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                data.map(item => <MyjobTr refetch={refetch} key={item._id} item={item}></MyjobTr>)
                            } */}

                            {
                                users.map((item , index) => <UsersTr key={item._id} index={index} item={item} refetch={refetch}></UsersTr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;