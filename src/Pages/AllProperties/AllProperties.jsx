import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../Components/Shared/Loader/Loader";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import AllProCard from "../../Components/AllProCard/AllProCard"; import { useState } from "react";
import { FiSearch } from 'react-icons/fi';




const AllProperties = () => {
    
    const axiosSecure = useAxiosSecure()
    const { data: verifiedProperties = [], refetch, isPending: verifiedPropertiesLoading } = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/verifiedProperties`);
            return res.data;
        }
    })
    
    const [allProperty , setAllProperty] = useState(verifiedProperties);



    const handleSearch = e => {
        e.preventDefault();
        const form = e.target;
        const inputValue = form.search?.value;

        const filterdData = verifiedProperties.filter(item => item.propertyTitle.toLowerCase().includes(inputValue.toLowerCase()));

        setAllProperty(filterdData);

    }

    


    if (verifiedPropertiesLoading) {
        return <Loader></Loader>
    }


    return (
        <div className="mb-10">
            <SectionTitle title="All Properties"></SectionTitle>

            <form onSubmit={handleSearch} className="relative flex items-center md:w-1/3 mx-auto mb-4">
                <input
                    type="text"
                    name="search"
                    className="w-full h-14 pl-4 pr-10 bg-white text-gray-800   focus:outline-none focus:ring focus:border-[#152475] rounded-none border border-[#152475]"
                    placeholder="Find a property..."
                />
                <button type="submit" className="absolute right-2 shadow-lg bg-[#152475] text-white h-10 w-10 flex items-center justify-center">
                    <FiSearch className="w-6 h-6" />
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    allProperty.map(item => <AllProCard key={item._id} refetch={refetch} item={item}></AllProCard>)
                }
            </div>

        </div>
    );
};

export default AllProperties;