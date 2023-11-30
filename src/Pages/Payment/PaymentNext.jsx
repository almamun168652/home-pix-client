import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import PropTypes from 'prop-types';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_CLIENT);
// console.log(import.meta.env.VITE_PAYMENT_KEY_CLIENT);

const PaymentNext = ({ paymentData }) => {

    return (
        <div className="border border-[#152475] rounded p-4 mb-10 w-full md:w-2/3 mx-auto bg-green-50 shadow-lg">
            <Elements stripe={stripePromise} >
                {/* <CheckOutForm /> */}
                <CheckOutForm paymentData={paymentData}></CheckOutForm>
            </Elements>
        </div>
    );
};

PaymentNext.propTypes = {
    paymentData: PropTypes.array.isRequired,
}

export default PaymentNext;