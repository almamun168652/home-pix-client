
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";






const CheckOutForm = ({ paymentData }) => {

    // console.log()
    const totalPay = paymentData.offeredAmount;
    // const  = paymentData.status;
    // console.log(paymentData.status);

    const { user } = useAuth();
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    // const totalPay = 50

    useEffect(() => {
        if (totalPay > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPay })
                .then(res => {

                    console.log(res.data.clientSecret);

                    setClientSecret(res.data?.clientSecret);
                })
        }

    }, [axiosSecure, totalPay])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
        }
        else {
            console.log(paymentMethod, 'paymentmethod');
            setError('')
        }

        // confirm payment card method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'User'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log(paymentIntent, 'paymentIntent');
            if (paymentIntent?.status === 'succeeded') {
                console.log('transition successfull', paymentIntent?.id);
            }
        }

        // send data in serverside
        const payment = {
            email: user?.email,
            propertyId: paymentData?._id,
            price: totalPay,
            transtionId: paymentIntent?.id,
            status: 'bought',
        }

        const res = await axiosSecure.put("/payments", payment)
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
            // toast.success('Transaction has been successfull and now you pro-user')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Payment Successfully!`,
                showConfirmButton: false,
                timer: 2500
            });
        }




    }


    return (
        <div>

            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <p className="text-red-500">
                    {error}</p>
                <button className="bg-blue-600 text-white font-bold my-5 px-3 py-1 rounded text-lg" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>

            {/* <ToastContainer /> */}

        </div>
    );
};


CheckOutForm.propTypes = {
    paymentData: PropTypes.array.isRequired,
}

export default CheckOutForm;