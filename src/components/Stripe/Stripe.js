import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import classes from './Stripe.module.css';

import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Stripe() {
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 50.00,
    description: "Cool car"
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "http://localhost:7077/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
   <div className={classes.stripe_container}>
  
      <StripeCheckout
        ComponentClass="divv"
        bitcoin={true}
        description="Help to fight Covid "
        label="Donate"
        image="https://stripe.com/img/documentation/checkout/marketplace.png" 
        stripeKey="pk_test_kY6IT8I2ZZjVhwkZgn1Eno0H00uYWO66ym"
        token={handleToken}
        amount={product.price * 100}
        name="Donate for kakinada city - Covid "
        billingAddress
        shippingAddres   
      />
      
    </div>
  );
}
export default Stripe;