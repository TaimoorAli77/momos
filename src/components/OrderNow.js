import React from 'react';
// import Button from './Button';
import { HashLink } from 'react-router-hash-link';
const OrderNow = () => {
  return (
    <div className='orderNow'>
      <h1  className='orderNowHead'>Where Taste Meets Excellence - We're The Best In Town</h1>
      <p className='orderNowPara'>Come and experience the ultimate in flavour and excellence – we’re the best in town!</p>
      <div className='pt-2'>
      <HashLink className='btn btn-danger' smooth to="/#order" >Order Now</HashLink>
      
      
      </div>
    </div>
  );
}

export default OrderNow;
