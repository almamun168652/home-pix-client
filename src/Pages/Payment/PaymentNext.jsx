import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import PropTypes from 'prop-types';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_CLIENT);
// console.log(import.meta.env.VITE_PAYMENT_KEY_CLIENT);

const PaymentNext = ({ paymentData }) => {

    return (
        <div>
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