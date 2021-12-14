/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51K6JviEskWZM418i8wzECYH4xSAfBsNecvydANmSsXSU8KeWgdaJwE7k8Z9MdRbwssOIL5PadM8orQqkNooVYG2a000UnC6dK8'
  ); // <==== PUT THE VARIABLE HERE

  try {
    // 1. Get checkout session from the API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console.log(session);

    // 2. Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
