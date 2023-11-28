import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import AllProCard from "../../Components/AllProCard/AllProCard";



const AllProperties = () => {

    const axiosSecure = useAxiosSecure()
    const { data: verifiedProperties = [] , refetch , isPending: verifiedPropertiesLoading } = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/verifiedProperties`);
            return res.data;
        }
    })

    if(verifiedPropertiesLoading){
        return <Loader></Loader>
    }

    return (
        <div className="mb-10">
            <SectionTitle title="All Properties"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    verifiedProperties.map(item => <AllProCard key={item._id} refetch={refetch} item={item}></AllProCard>)
                }
            </div>

        </div>
    );
};

export default AllProperties;