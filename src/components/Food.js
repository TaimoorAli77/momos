import React from 'react';
// import Button from './Button';
import { Link } from 'react-router-dom';

const Food = () => {
  return (
    <div className='text-center p-3'>
      <h1 className='text-center food '> Our Food</h1>
      <div className="pl-5 pb-5 text-center">
      {/* <Button  btn="See Our Menu" url="/menu"/> */}
      <Link className="btn btn-danger " type="submit" to="/menu" >See Our Menu</Link> 
      
      
      </div>
    </div>
  );
}

export default Food;
