
import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";
import Loader from "../../../Components/Shared/Loader/Loader";


const ManageReviews = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allReviews = [], isLoading: allReviewsLoading , refetch } = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allReviews');
            return res.data;
        }
    })

    console.log(allReviews);



    if(allReviewsLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <DashboardTitle title="Manage Reviews"></DashboardTitle>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    allReviews.map(item => <ManageReviewCard key={item._id} item={item} refetch={refetch}></ManageReviewCard>)
                }
            </div>
            
        </div>
    );
};



export default ManageReviews;