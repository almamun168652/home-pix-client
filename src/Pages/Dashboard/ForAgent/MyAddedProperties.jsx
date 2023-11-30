import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AddedPropertyCard from "./AddedPropertyCard";
import Loader from "../../../Components/Shared/Loader/Loader";


const MyAddedProperties = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: myProperties = [] , refetch , isPending: isPropertiesLoading } = useQuery({
        queryKey: ['addedProperties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties?email=${user.email}`);
            return res.data;
        }
    })

    if(isPropertiesLoading){
        return <Loader></Loader>
    }


    return (
        <div>
            <DashboardTitle title="My Added Properties"></DashboardTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:mx-4 mb-10">
                {
                    myProperties.map(item => <AddedPropertyCard refetch={refetch} key={item._id} item={item} ></AddedPropertyCard>)
                }
            </div>

        </div>
    );
};

export default MyAddedProperties;