import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Shared/Loader/Loader";
import BoughtCard from "./BoughtCard";


const PropertyBought = () => {


    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: myBought = [], refetch, isPending: ismyBoughtLoading } = useQuery({
        queryKey: ['myBought', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myBought?email=${user.email}`);
            return res.data;
        }
    })

   if(ismyBoughtLoading){
    return <Loader></Loader>
   }

    return (
        <div>
            <DashboardTitle title="Property Bought"></DashboardTitle>

            <div>
                {
                    myBought.map(item => <BoughtCard key={item._id} item={item} refetch={refetch}></BoughtCard>)
                }
            </div>

        </div>
    );
};

export default PropertyBought;