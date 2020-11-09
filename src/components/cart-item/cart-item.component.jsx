import React from 'react';

import { CartItemContainer, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{name}</Name>
      <span>
        {quantity} X {price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
