import { loadStripe } from "@stripe/stripe-js";

let promiseStripe;

const getStripe = () => {
  if (!promiseStripe) {
    promiseStripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return promiseStripe;
};

export default getStripe;
