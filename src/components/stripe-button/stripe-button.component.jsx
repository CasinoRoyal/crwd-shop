import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_65MqCGHOGKKpcDMgirCqofLK00OhMbtFmT';

  const onToken = (token) => {
    console.log(token);

    alert('Success');
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