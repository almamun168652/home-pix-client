import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import Loader from "../Shared/Loader/Loader";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import AdvertieseCard from "./AdvertiseCard";


const AdvertisementSection = () => {

    const axiosOpen = useAxiosOpen();

    const { data: bestCollection = [], isLoading: bestCollectionLoading, refetch } = useQuery({
        queryKey: ['bestCollection'],
        queryFn: async () => {
            const res = await axiosOpen.get('/bestCollection');
            return res.data;
        }
    })

    if (bestCollectionLoading) {
        return <Loader></Loader>
    }

    console.log(bestCollection);

    return (
        <div className="mt-20">
            <SectionTitle title="Our Best Collection"></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* {
                    allProperty.map(item => <AllProCard key={item._id} refetch={refetch} item={item}></AllProCard>)
                } */}

                {
                    bestCollection.map(item => <AdvertieseCard key={item._id} item={item} refetch={refetch}></AdvertieseCard>)
                }
            </div>
            
        </div>
    );
};

export default AdvertisementSection;