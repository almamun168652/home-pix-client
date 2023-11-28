import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle/DashboardTitle";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import Loader from "../../../Components/Shared/Loader/Loader";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {


    
    const axiosOpen = useAxiosOpen();

    const { data: wishlist = [], isLoading: wishlistLoading , refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosOpen.get('/wishlist');
            return res.data;
        }
    })

    if(wishlistLoading){
        return <Loader></Loader>
    }


    return (
        <div>
            <DashboardTitle title="Wishlist"></DashboardTitle>

            <div>
                {
                    wishlist.map(item => <WishlistCard key={item._id} item={item} refetch={refetch}></WishlistCard>)
                }
            </div>

        </div>
    );
};

export default Wishlist;