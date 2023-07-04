import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';

import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_Pk)

console.log(import.meta.env.VITE_Payment_Gatway_Pk);
console.log(stripePromise);
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item)=>sum+item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log(price);

    return (
        <div>
            <SectionTitle subHeading='Please Proceed' heading='Payment'></SectionTitle>
            <h1 className="text-4xl">Payment gatway hisab nikas taka ar taka</h1>
            <Elements stripe={stripePromise}>  
               <CheckoutForm cart={cart}  price={price}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;