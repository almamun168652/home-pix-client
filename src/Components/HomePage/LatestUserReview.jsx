
import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import LatestReviewCard from "./LatestReviewCard";


const LatestUserReview = () => {

    const axiosOpen = useAxiosOpen();

    const { data: latestReview = [] } = useQuery({
        queryKey: ['latestReview'],
        queryFn: async () => {
            const res = await axiosOpen.get('/latestReview');
            return res.data;
        }
    })

    console.log(latestReview);

    return (
        <div className="my-20">

            <SectionTitle title="Latest User Review"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    latestReview.map(item => <LatestReviewCard key={item._id} item={item}></LatestReviewCard>)
                }
            </div>



        </div>
    );
};

export default LatestUserReview;