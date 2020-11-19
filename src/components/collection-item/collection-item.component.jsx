import React, { useContext } from 'react';
import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ item }) =>{
  const { name, imageUrl, price } = item;
  const { addItem } = useContext(CartContext);

  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted> Add to Cart </CustomButton>
  </div>
)};

export default CollectionItem;
