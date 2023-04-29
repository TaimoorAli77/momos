import React from 'react';
import Button from './Button';
const OrderNow = () => {
  return (
    <div className='orderNow'>
      <h1  className='orderNowHead'>Where Taste Meets Excellence - We're The Best In Town</h1>
      <p className='orderNowPara'>Come and experience the ultimate in flavour and excellence – we’re the best in town!</p>
      <div className='pt-2'>
      <Button  btn="Order Now" url="/"/>
      
      
      </div>
    </div>
  );
}

export default OrderNow;
