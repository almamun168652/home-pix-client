import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../Components/Shared/Loader/Loader";
import MyReviewCard from "./MyReviewCard";


const MyReview = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const { data: myReview = [] , refetch , isPending: isMyReviewLoading } = useQuery({
        queryKey: ['myReview', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myReview?email=${user.email}`);
            return res.data;
        }
    })

    if(isMyReviewLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <DashboardTitle title="My Review"></DashboardTitle>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    myReview.map(item => <MyReviewCard key={item._id} item={item} refetch={refetch}></MyReviewCard>)
                }
            </div>
            
        </div>
    );
};



export default MyReview;