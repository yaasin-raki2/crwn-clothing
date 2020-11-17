import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImage,
  Content,
  Title,
  Subtitle,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImage className='background-image' imageUrl={imageUrl} />
    <Content className='content'>
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
