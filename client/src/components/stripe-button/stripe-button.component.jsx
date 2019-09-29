import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_65MqCGHOGKKpcDMgirCqofLK00OhMbtFmT';

  const onToken = (token) => {
    axios({ 
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }})
      .then((res) => console.info('payment success'))
      .catch((err) => console.error('payment error: ' + err));
  }

  return(
    <StripeCheckout 
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishKey}/>
  )
};

export default StripeButton;