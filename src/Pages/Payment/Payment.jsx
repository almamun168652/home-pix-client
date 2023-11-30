import { useParams } from "react-router-dom";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import PaymentNext from "./PaymentNext";

const Payment = () => {

    const {id} = useParams();

    const axiosOpen = useAxiosOpen();
    const { data: paymentData = [] } = useQuery({
        queryKey: ['paymentData'],
        queryFn: async () => {
            const res = await axiosOpen.get(`/goPay/${id}`);
            return res.data;
        }
    })

    console.log(paymentData);

    return (
        <div>
            <SectionTitle title="Payment Now"></SectionTitle>

            <PaymentNext paymentData={paymentData}></PaymentNext>

            
        </div>
    );
};



export default Payment;