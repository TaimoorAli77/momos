import React from 'react';
import Button from './Button';

const Food = () => {
  return (
    <div className='text-center p-3'>
      <h1 className='text-center food '> Our Food</h1>
      <div className="pl-5 pb-5 text-center">
      <Button  btn="See Our Menu" />
      </div>
    </div>
  );
}

export default Food;
