import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishabeleKey = 'pk_test_51HkqejJWM5w4kjULdrXsBKvBOYrTgc9RV7CxLO6KqeVD7VdW3u6y7FD2aGBzhhQY1QcV8iWbBH47t0Hkf93yqwxM00vaxkHxvG';
  
  const onToken = token => {
    console.log(token)
    alert('Payement Succes')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishabeleKey}
    />
  );
};

export default StripeCheckoutButton;